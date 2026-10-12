import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactElement, ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { DeckCtx } from './DeckContext';
import Annotator, { type Stroke } from './Annotator';
import {
  IconSidebar,
  IconGrid,
  IconLeft,
  IconRight,
  IconPencil,
  IconExpand,
  IconShrink,
  IconPresent,
  IconClose,
} from './icons';

/* ── The paged presentation engine + the Slidev-style chrome (dock + rail).
   Wrap your <Slide>/<Bento>/… in <Deck>. Each top-level child is one slide.
     → / ↓ / Space   next (reveals the next <Build>, then the next slide)
     ← / ↑           previous            S sidebar     G grid view
     Home / End      first / last        A annotate    P presenter (new tab)
     F fullscreen    H hide/show the UI
   Copy verbatim; theme only via the :root tokens. ───────────────────────── */

const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(
    2,
    '0'
  )}`;

function Thumb({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [d, setD] = useState({ vw: 1280, vh: 720, scale: 0.15 });
  // measure before paint — with useEffect the first frame renders at the
  // default scale and visibly snaps (worst in the grid view, which has no
  // slide-in transition to mask it).
  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () =>
      setD({
        vw: window.innerWidth,
        vh: window.innerHeight,
        scale: el.clientWidth / window.innerWidth,
      });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);
  return (
    <div
      className="noir-thumb-frame"
      ref={frameRef}
      style={{ aspectRatio: `${d.vw} / ${d.vh}` }}
    >
      <DeckCtx.Provider value={{ clicks: 9999, isStatic: true }}>
        <div
          className="noir-thumb-scale"
          style={{ width: d.vw, height: d.vh, transform: `scale(${d.scale})` }}
        >
          {children}
        </div>
      </DeckCtx.Provider>
    </div>
  );
}

export default function Deck({ children }: { children: ReactNode }) {
  const slides = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );
  const total = slides.length;
  const isPresenter = useMemo(
    () => new URLSearchParams(window.location.search).has('presenter'),
    []
  );

  const [slide, setSlide] = useState(() => {
    const h = parseInt(window.location.hash.slice(1), 10);
    return h >= 1 && h <= total ? h - 1 : 0;
  });
  const [clicks, setClicks] = useState(0);
  const [curMax, setCurMax] = useState(0);
  const [railOpen, setRailOpen] = useState(false);
  const [gridOpen, setGridOpen] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [laserPointer, setLaserPointer] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [fs, setFs] = useState(false);
  const [uiHidden, setUiHidden] = useState(false);
  const [nearDock, setNearDock] = useState(false);
  const [cursorIdle, setCursorIdle] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailIdRef = useRef(0);
  const [noteOverrides, setNoteOverrides] = useState<Record<number, string>>(
    () => {
      try {
        return JSON.parse(localStorage.getItem('deck:notes') || '{}');
      } catch {
        return {};
      }
    }
  );

  // per-slide build maxima (so going back restores the right click state) and
  // per-slide annotations (so drawings persist on the slide they were made).
  const maxMap = useRef<Record<number, number>>({});
  const annStore = useRef<Record<number, Stroke[]>>({});
  const slideRef = useRef(slide);
  slideRef.current = slide;

  const registerMax = useCallback((at: number) => {
    const m = maxMap.current;
    m[slideRef.current] = Math.max(m[slideRef.current] || 0, at);
    setCurMax((c) => Math.max(c, at));
  }, []);

  const go = useCallback(
    (i: number) => {
      const n = Math.max(0, Math.min(total - 1, i));
      setSlide(n);
      setClicks(0);
      setCurMax(maxMap.current[n] || 0);
    },
    [total]
  );
  const next = useCallback(() => {
    if (clicks < curMax) {
      setClicks(clicks + 1);
      return;
    }
    if (slide < total - 1) {
      const n = slide + 1;
      setSlide(n);
      setClicks(0);
      setCurMax(maxMap.current[n] || 0);
    }
  }, [clicks, curMax, slide, total]);
  const prev = useCallback(() => {
    if (clicks > 0) {
      setClicks(clicks - 1);
      return;
    }
    if (slide > 0) {
      const n = slide - 1;
      const m = maxMap.current[n] || 0;
      setSlide(n);
      setClicks(m);
      setCurMax(m);
    }
  }, [clicks, slide]);

  const toggleFs = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen?.().then(() => {
        try {
          (screen.orientation as any)?.lock?.('landscape').catch(() => {});
        } catch {
          /* ignore */
        }
      });
    }
  }, []);

  // Deteksi orientasi layar (khusus perangkat mobile portrait)
  const [isPortraitMobile, setIsPortraitMobile] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768 && window.innerHeight > window.innerWidth;
  });

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth < 900 || window.innerHeight < 600;
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsPortraitMobile(isMobile && isPortrait);
    };

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    // Otomatis aktifkan fullscreen saat pengguna pertama kali menyentuh layar HP
    const handleFirstTouch = () => {
      const isMobile = window.innerWidth < 900 || window.innerHeight < 600;
      if (isMobile && !document.fullscreenElement) {
        const el = document.documentElement;
        const req = el.requestFullscreen || (el as any).webkitRequestFullscreen;
        if (req) {
          req.call(el).then(() => {
            try {
              (screen.orientation as any)?.lock?.('landscape').catch(() => {});
            } catch {
              /* ignore */
            }
          }).catch(() => {});
        }
      }
    };

    window.addEventListener('touchstart', handleFirstTouch, { once: true, passive: true });
    window.addEventListener('click', handleFirstTouch, { once: true, passive: true });

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('click', handleFirstTouch);
    };
  }, []);

  const requestLandscape = useCallback(() => {
    const el = document.documentElement;
    const req = el.requestFullscreen || (el as any).webkitRequestFullscreen;
    if (req) {
      req.call(el).then(() => {
        try {
          (screen.orientation as any)?.lock?.('landscape').catch(() => {});
        } catch {
          /* ignore */
        }
      }).catch(() => {});
    }
  }, []);
  // sidebar and grid view are mutually exclusive — opening one closes the other
  const toggleRail = useCallback(() => {
    setRailOpen((v) => !v);
    setGridOpen(false);
  }, []);
  const toggleGrid = useCallback(() => {
    setGridOpen((v) => !v);
    setRailOpen(false);
  }, []);
  const setNote = useCallback((text: string) => {
    setNoteOverrides((prev) => {
      const nextO = { ...prev, [slideRef.current]: text };
      try {
        localStorage.setItem('deck:notes', JSON.stringify(nextO));
      } catch {
        /* ignore */
      }
      return nextO;
    });
  }, []);
  const openPresenter = useCallback(() => {
    if (isPresenter) return;
    const url =
      window.location.pathname + '?presenter=1' + window.location.hash;
    window.open(url, 'deck-presenter');
  }, [isPresenter]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === 'TEXTAREA' ||
          t.tagName === 'INPUT' ||
          t.isContentEditable)
      )
        return;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          go(0);
          break;
        case 'End':
          e.preventDefault();
          go(total - 1);
          break;
        case 's':
        case 'S':
          toggleRail();
          break;
        case 'g':
        case 'G':
          toggleGrid();
          break;
        case 'f':
        case 'F':
          toggleFs();
          break;
        case 'a':
        case 'A':
          setDrawing((v) => !v);
          break;
        case 'l':
        case 'L':
          setLaserPointer((v) => !v);
          break;
        case 'h':
        case 'H':
          setUiHidden((v) => !v);
          break;
        case 'Escape':
          setRailOpen(false);
          setGridOpen(false);
          setDrawing(false);
          setUiHidden(false);
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, go, total, toggleRail, toggleGrid, toggleFs, openPresenter]);

  // safety net: if the authored deck kept the placeholder tab title, derive
  // one from the current slide's heading so shared links look right.
  useEffect(() => {
    if (!document.title.startsWith('Replace')) return;
    const h = document.querySelector<HTMLElement>(
      '.slide-stage h1, .slide-stage h2'
    );
    const t = h?.innerText.replace(/\s+/g, ' ').trim();
    if (t) document.title = t;
  }, []);

  // URL hash sync (initial slide comes from the hash via useState above)
  useEffect(() => {
    const want = String(slide + 1);
    if (window.location.hash.slice(1) !== want)
      history.replaceState(null, '', '#' + want);
  }, [slide]);
  useEffect(() => {
    const onHash = () => {
      const h = parseInt(window.location.hash.slice(1), 10);
      if (h >= 1 && h <= total && h - 1 !== slide) go(h - 1);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [slide, total, go]);

  // cross-tab sync (audience ⇄ presenter), via BroadcastChannel
  const chan = useRef<BroadcastChannel | null>(null);
  const applyingRemote = useRef(false);
  useEffect(() => {
    const c = new BroadcastChannel('deck-sync');
    chan.current = c;
    c.onmessage = (e) => {
      if (e.data?.type === 'state') {
        applyingRemote.current = true;
        setSlide(e.data.slide);
        setClicks(e.data.clicks);
      }
    };
    return () => c.close();
  }, []);
  useEffect(() => {
    if (applyingRemote.current) {
      applyingRemote.current = false;
      return;
    }
    chan.current?.postMessage({ type: 'state', slide, clicks });
  }, [slide, clicks]);

  // fullscreen flag, presenter timer, idle auto-hide
  useEffect(() => {
    const h = () => setFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', h);
    return () => document.removeEventListener('fullscreenchange', h);
  }, []);
  useEffect(() => {
    if (!isPresenter) return;
    setElapsed(0);
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [isPresenter]);
  // mouse-driven only: keyboard nav keeps the UI hidden; the dock returns when
  // the pointer nears the bottom (where it lives); the cursor hides on idle.
  useEffect(() => {
    let t = 0;
    const onMove = (e: MouseEvent) => {
      setCursorIdle(false);
      setNearDock(e.clientY > window.innerHeight - 150);
      setMousePos({ x: e.clientX, y: e.clientY });

      if (laserPointer) {
        trailIdRef.current += 1;
        const newPoint = { x: e.clientX, y: e.clientY, id: trailIdRef.current };
        setTrail((prev) => [...prev.slice(-14), newPoint]);
      }

      clearTimeout(t);
      t = window.setTimeout(() => setCursorIdle(true), 2600);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', onMove);
    };
  }, [laserPointer]);

  // Auto fade trail particles
  useEffect(() => {
    if (!laserPointer && trail.length > 0) {
      setTrail([]);
      return;
    }
    if (trail.length === 0) return;
    const timer = setTimeout(() => {
      setTrail((prev) => prev.slice(1));
    }, 45);
    return () => clearTimeout(timer);
  }, [trail, laserPointer]);

  const liveCtx = useMemo(
    () => ({ clicks, isStatic: false, registerMax }),
    [clicks, registerMax]
  );
  const hasPrev = slide > 0 || clicks > 0;
  const hasNext = slide < total - 1 || clicks < curMax;
  const notes = (slides[slide]?.props as { notes?: string } | undefined)?.notes;
  const noteText = noteOverrides[slide] ?? notes ?? '';
  const nextSlide = slides[slide + 1];
  const hideUI = uiHidden || (fs && !nearDock);
  const cursorHidden = fs && cursorIdle && !drawing;
  const showAnnotator = drawing || (annStore.current[slide]?.length ?? 0) > 0;

  // prev / counter / next — rendered inside the pill on desktop, in its own
  // pill above the tools on phones (only one is visible at a time).
  const navCluster = (
    <>
      <button
        className="noir-icon-btn"
        data-tip="Previous"
        aria-label="Previous"
        disabled={!hasPrev}
        onClick={prev}
      >
        <IconLeft />
      </button>
      <div className="noir-counter">
        <span className="noir-counter-now">{slide + 1}</span>
        <span className="noir-counter-tot">/ {total}</span>
      </div>
      <button
        className="noir-icon-btn"
        data-tip="Next"
        aria-label="Next"
        disabled={!hasNext}
        onClick={next}
      >
        <IconRight />
      </button>
    </>
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className={'deck' + (cursorHidden ? ' nocursor' : '')}>
        <DeckCtx.Provider value={liveCtx}>
          <div className="slide-stage" key={slide}>
            {slides[slide]}
          </div>
        </DeckCtx.Provider>

        {showAnnotator && (
          <Annotator
            key={slide}
            slide={slide}
            store={annStore.current}
            active={drawing}
          />
        )}

        <aside className={'noir-rail' + (railOpen ? ' open' : '')}>
          <div className="noir-rail-head">
            <span className="noir-rail-title">Slides</span>
            <button
              className="noir-icon-btn sm"
              data-tip="Close"
              aria-label="Close sidebar"
              onClick={() => setRailOpen(false)}
            >
              <IconClose />
            </button>
          </div>
          <div className="noir-rail-list">
            {railOpen &&
              slides.map((s, i) => (
                <button
                  key={i}
                  className={'noir-thumb' + (i === slide ? ' active' : '')}
                  onClick={() => {
                    go(i);
                    setRailOpen(false);
                  }}
                >
                  <span className="noir-thumb-no">{i + 1}</span>
                  <Thumb>{s}</Thumb>
                </button>
              ))}
          </div>
        </aside>

        {gridOpen && (
          <div className="noir-grid">
            <div className="noir-grid-head">
              <span className="noir-rail-title">All slides</span>
              <button
                className="noir-icon-btn sm"
                data-tip="Close"
                aria-label="Close grid view"
                onClick={() => setGridOpen(false)}
              >
                <IconClose />
              </button>
            </div>
            <div className="noir-grid-list">
              {slides.map((s, i) => (
                <button
                  key={i}
                  className={'noir-thumb' + (i === slide ? ' active' : '')}
                  onClick={() => {
                    go(i);
                    setGridOpen(false);
                  }}
                >
                  <span className="noir-thumb-no">{i + 1}</span>
                  <Thumb>{s}</Thumb>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={'noir-dock' + (hideUI ? ' hidden' : '')}>
          {/* phones: nav floats bare above the tools pill (see base.css) */}
          <div className="noir-bar noir-nav-bar">{navCluster}</div>
          <div className="noir-bar">
            <button
              className={'noir-icon-btn' + (railOpen ? ' on' : '')}
              data-tip="Sidebar (S)"
              aria-label="Sidebar"
              aria-pressed={railOpen}
              onClick={toggleRail}
            >
              <IconSidebar />
            </button>
            <button
              className={'noir-icon-btn' + (gridOpen ? ' on' : '')}
              data-tip="Grid view (G)"
              aria-label="Grid view"
              aria-pressed={gridOpen}
              onClick={toggleGrid}
            >
              <IconGrid />
            </button>
            <span className="noir-sep" />
            <div className="noir-nav-inline">{navCluster}</div>
            <span className="noir-sep" />
            <button
              className={'noir-icon-btn' + (drawing ? ' on' : '')}
              data-tip="Coret / Gambar (A)"
              aria-label="Annotate"
              aria-pressed={drawing}
              onClick={() => setDrawing((v) => !v)}
            >
              <IconPencil />
            </button>
            <button
              className={'noir-icon-btn' + (laserPointer ? ' on' : '')}
              data-tip="Laser Pointer / Ekor Kursor (L)"
              aria-label="Laser Pointer"
              aria-pressed={laserPointer}
              onClick={() => setLaserPointer((v) => !v)}
              style={laserPointer ? { color: '#0284c7', background: 'rgba(2, 132, 199, 0.15)' } : undefined}
            >
              <i className="fa-solid fa-wand-magic-sparkles" style={{ fontSize: '13px' }}></i>
            </button>
            <button
              className="noir-icon-btn"
              data-tip={fs ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
              aria-label={fs ? 'Exit fullscreen' : 'Enter fullscreen'}
              onClick={toggleFs}
            >
              {fs ? <IconShrink /> : <IconExpand />}
            </button>
          </div>
        </div>

        {/* Efek Laser Pointer & Ekor Kursor (Comet Trail) untuk Mempermudah Presentasi */}
        {laserPointer && (
          <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99998 }}>
            {/* Jejak Ekor Kursor (Trail Particles) */}
            {trail.map((point, idx) => {
              const progress = (idx + 1) / trail.length; // 0..1
              const size = 6 + progress * 14; // membesar ke arah kepala
              const opacity = progress * 0.75;
              return (
                <div
                  key={point.id}
                  style={{
                    position: 'absolute',
                    left: point.x - size / 2,
                    top: point.y - size / 2,
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(2, 132, 199, ${opacity}) 0%, rgba(56, 189, 248, ${opacity * 0.6}) 60%, transparent 100%)`,
                    boxShadow: `0 0 ${8 * progress}px rgba(2, 132, 199, ${opacity})`,
                    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
                  }}
                />
              );
            })}

            {/* Kepala Pointer Laser (Bercahaya & Pulsing) */}
            {mousePos.x > 0 && mousePos.y > 0 && (
              <div
                style={{
                  position: 'absolute',
                  left: mousePos.x - 14,
                  top: mousePos.y - 14,
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #38bdf8 0%, #0284c7 60%, transparent 100%)',
                  boxShadow: '0 0 18px 4px #0284c7, 0 0 32px 8px rgba(56, 189, 248, 0.5)',
                  border: '2px solid #ffffff',
                  transform: 'scale(1)',
                  pointerEvents: 'none',
                  animation: 'pulse 1.2s infinite alternate',
                }}
              />
            )}
          </div>
        )}

        {/* Overlay Khusus Smartphone Portrait: Arahkan Otomatis ke Landscape */}
        {isPortraitMobile && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(2, 132, 199, 0.2)',
                border: '1px solid #0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: '#38bdf8',
                marginBottom: '20px',
                animation: 'pulse 2s infinite',
              }}
            >
              <i className="fa-solid fa-mobile-screen-button fa-rotate-90"></i>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 10px 0', color: '#ffffff' }}>
              Putar Layar ke Landscape
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', maxWidth: '320px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
              Materi slide didesain untuk tampilan proyektor / widescreen (16:9). Silakan putar HP Anda ke posisi mendatar (*landscape*) untuk pengalaman terbaik.
            </p>

            <button
              onClick={requestLandscape}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                borderRadius: '999px',
                background: '#0284c7',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)',
              }}
            >
              <i className="fa-solid fa-expand"></i>
              Buka Mode Layar Penuh (Auto Landscape)
            </button>
          </div>
        )}
      </div>
    </MotionConfig>
  );
}
