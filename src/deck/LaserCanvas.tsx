import React, { useEffect, useRef } from 'react';

interface LaserCanvasProps {
  active: boolean;
}

interface Point {
  x: number;
  y: number;
  time: number;
}

interface ClickWave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export default function LaserCanvas({ active }: LaserCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; moved: boolean }>({ x: -100, y: -100, moved: false });
  const pointsRef = useRef<Point[]>([]);
  const wavesRef = useRef<ClickWave[]>([]);

  useEffect(() => {
    if (!active) {
      pointsRef.current = [];
      wavesRef.current = [];
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, moved: true };
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
      });
      // Batasi panjang histori agar efisien
      if (pointsRef.current.length > 50) {
        pointsRef.current.shift();
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      wavesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 6,
        maxRadius: 40,
        opacity: 0.9,
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const now = Date.now();
      // Filter titik yang berumur lebih dari 350ms (ekor memudar)
      pointsRef.current = pointsRef.current.filter((p) => now - p.time < 350);

      const points = pointsRef.current;

      // 1. Gambar Ekor Kursor (Ribbon Trail)
      if (points.length > 1) {
        for (let i = 1; i < points.length; i++) {
          const p1 = points[i - 1];
          const p2 = points[i];
          const age = now - p2.time;
          const life = Math.max(0, 1 - age / 350); // 1 (baru) -> 0 (lama)

          // Garis Glow Luar
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(2, 132, 199, ${life * 0.45})`;
          ctx.lineWidth = 4 + life * 10;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();

          // Garis Terang Inti
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${life * 0.9})`;
          ctx.lineWidth = 2 + life * 4;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      }

      // 2. Gambar Gelombang Klik (Ripple Effect)
      for (let i = wavesRef.current.length - 1; i >= 0; i--) {
        const wave = wavesRef.current[i];
        wave.radius += 2.2;
        wave.opacity -= 0.04;

        if (wave.opacity <= 0 || wave.radius >= wave.maxRadius) {
          wavesRef.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(2, 132, 199, ${wave.opacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // 3. Gambar Kepala Laser di Posisi Kursor
      const { x, y, moved } = mouseRef.current;
      if (moved && x >= 0 && y >= 0) {
        // Halo luar bercahaya
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 22);
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.85)');
        gradient.addColorStop(0.4, 'rgba(2, 132, 199, 0.5)');
        gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');

        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Lingkaran tegas laser
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#0284c7';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Titik putih di pusat
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99998,
      }}
    />
  );
}
