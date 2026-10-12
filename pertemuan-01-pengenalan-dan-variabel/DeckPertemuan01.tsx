import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Deck from '../src/deck/Deck';
import Slide from '../src/deck/Slide';
import Cover from '../src/components/Cover';
import Section from '../src/components/Section';
import Steps from '../src/components/Steps';
import CodeWindow from '../src/components/CodeWindow';
import Contrast from '../src/components/Contrast';
import Table from '../src/components/Table';
import Tabs from '../src/components/Tabs';
import pythonLogo from '../src/assets/python-logo.svg';
import guidoPortrait from '../src/assets/guido-van-rossum.jpg';

// Standarisasi style kartu agar konsisten di seluruh slide
const cardStyle: React.CSSProperties = {
  padding: '24px',
  borderRadius: 'var(--radius)',
  background: 'var(--surface)',
  border: '1px solid var(--hair)',
  boxShadow: 'var(--shadow)',
};

const iconBoxStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
  borderRadius: 'var(--radius-sm)',
  background: 'rgba(2, 132, 199, 0.08)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary)',
  fontSize: '16px',
  flexShrink: 0,
};

// Komponen Visualisasi Animasi Interaktif: Alur Pipa Eksekusi Python dengan Layar Komputer Simulasi
function AnimatedPythonPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      num: 1,
      title: '1. Source Code',
      icon: 'fa-brands fa-python',
      color: '#0284c7',
      label: 'Script .py',
      status: 'Menulis sintaks teks di editor',
      analogy: 'Buku resep masakan yang ditulis dalam bahasa manusia.',
    },
    {
      num: 2,
      title: '2. Kompilasi Bytecode',
      icon: 'fa-solid fa-gears',
      color: '#6366f1',
      label: '__pycache__',
      status: 'CPython mengompilasi ke bytecode (.pyc)',
      analogy: 'Bahan masakan yang sudah dipotong & ditakar siap olah.',
    },
    {
      num: 3,
      title: '3. PVM Execution',
      icon: 'fa-solid fa-microchip',
      color: '#059669',
      label: 'Virtual Machine',
      status: 'PVM menerjemahkan instruksi untuk sistem operasi',
      analogy: 'Koki restoran yang memproses bahan langsung di atas kompor.',
    },
    {
      num: 4,
      title: '4. CPU & Output',
      icon: 'fa-solid fa-desktop',
      color: '#ea580c',
      label: 'Terminal Console',
      status: 'Hardware CPU mencetak hasil ke layar konsol',
      analogy: 'Hidangan matang lezat tersaji sempurna di meja makan.',
    },
  ];

  // Auto loop ticker setiap 3.2 detik jika isPlaying aktif
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div style={{ maxWidth: '1060px', marginInline: 'auto', width: '100%' }}>
      <div className="kicker">ARSITEKTUR & MEKANISME EKSEKUSI</div>
      <h2 className="headline" style={{ marginBottom: '8px' }}>
        Di Balik Layar: <span className="accent-text">Bagaimana Python Bekerja?</span>
      </h2>
      <p style={{ color: 'var(--fg-muted)', fontSize: '0.92rem', maxWidth: '780px', marginInline: 'auto', marginBottom: '16px' }}>
        Perjalanan kode dari editor, diterjemahkan oleh Python Virtual Machine, hingga dicetak di terminal:
      </p>

      {/* Kontrol Interaktif Play/Pause & Step Selector */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            padding: '5px 12px',
            borderRadius: '999px',
            border: '1px solid var(--hair)',
            background: isPlaying ? 'rgba(2, 132, 199, 0.1)' : 'var(--surface-2)',
            color: isPlaying ? 'var(--primary)' : 'var(--fg-muted)',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <i className={isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
          <span>{isPlaying ? 'Jeda Simulasi' : 'Jalankan Simulasi'}</span>
        </button>

        <div style={{ display: 'inline-flex', gap: '4px', background: 'var(--surface-2)', padding: '3px', borderRadius: '999px', border: '1px solid var(--hair)' }}>
          {steps.map((st, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveStep(i);
                setIsPlaying(false);
              }}
              style={{
                border: 'none',
                background: activeStep === i ? steps[i].color : 'transparent',
                color: activeStep === i ? '#ffffff' : 'var(--fg-muted)',
                padding: '4px 10px',
                borderRadius: '999px',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Tahap {st.num[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Tahapan Mini-Badges Pipeline */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginBottom: '16px',
          textAlign: 'left',
        }}
      >
        {steps.map((st, i) => {
          const isActive = activeStep === i;
          return (
            <motion.div
              key={i}
              onClick={() => {
                setActiveStep(i);
                setIsPlaying(false);
              }}
              animate={{
                scale: isActive ? 1.02 : 1,
                borderColor: isActive ? st.color : 'rgba(15, 23, 42, 0.12)',
              }}
              style={{
                padding: '10px 12px',
                borderRadius: '8px',
                border: `1px solid ${isActive ? st.color : 'var(--hair)'}`,
                background: isActive ? 'var(--surface)' : 'var(--surface-2)',
                boxShadow: isActive ? `0 4px 12px ${st.color}20` : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: `${st.color}18`,
                  color: st.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  flexShrink: 0,
                }}
              >
                <i className={st.icon}></i>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: isActive ? st.color : 'var(--fg)', whiteSpace: 'nowrap' }}>
                  {st.title}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--fg-faint)', whiteSpace: 'nowrap' }}>
                  {st.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Visualisasi Layar Komputer Nyata (Split Kode Editor vs Terminal Eksekusi) */}
      <div
        style={{
          background: '#090d16',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 12px 36px -6px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          marginBottom: '16px',
          textAlign: 'left',
        }}
      >
        {/* Title Bar Frame Komputer */}
        <div
          style={{
            background: '#131926',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }}></span>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#eab308' }}></span>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e' }}></span>
            <span style={{ marginLeft: '12px', color: '#94a3b8', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
              <i className="fa-solid fa-laptop-code" style={{ marginRight: '6px', color: '#38bdf8' }}></i>
              Workstation Simulator · Python 3.12 Runtime
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                padding: '2px 8px',
                borderRadius: '4px',
                background: `${steps[activeStep].color}25`,
                color: steps[activeStep].color,
                border: `1px solid ${steps[activeStep].color}50`,
                fontWeight: 600,
              }}
            >
              <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: '4px' }}></i>
              {steps[activeStep].status}
            </span>
          </div>
        </div>

        {/* Layar Komputer: Split Editor Kiri & Terminal Kanan */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', minHeight: '190px' }}>
          {/* Kolom Kiri: Code Editor (VS Code Style) */}
          <div
            style={{
              padding: '16px 20px',
              borderRight: '1px solid rgba(255, 255, 255, 0.08)',
              background: '#0b101b',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: '#f8fafc',
              lineHeight: 1.6,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
              <span style={{ color: '#38bdf8', fontSize: '0.75rem', fontWeight: 600 }}>
                <i className="fa-brands fa-python" style={{ marginRight: '6px' }}></i>
                program_pertama.py
              </span>
              <span style={{ color: '#64748b', fontSize: '0.72rem' }}>UTF-8</span>
            </div>

            <div style={{ color: '#64748b', fontSize: '0.8rem' }}># 1. Mendefinisikan variabel</div>
            <div>
              <span style={{ color: '#f43f5e' }}>nama</span> = <span style={{ color: '#38bdf8' }}>"Budi Santoso"</span>
            </div>
            <div>
              <span style={{ color: '#f43f5e' }}>bahasa</span> = <span style={{ color: '#38bdf8' }}>"Python"</span>
            </div>
            <div style={{ marginTop: '8px', color: '#64748b', fontSize: '0.8rem' }}># 2. Perintah cetak output</div>
            <div>
              <span style={{ color: '#eab308' }}>print</span>(
              <span style={{ color: '#a3e635' }}>f"Halo Dunia, nama saya &#123;nama&#125;!"</span>
              )
            </div>
            <div>
              <span style={{ color: '#eab308' }}>print</span>(
              <span style={{ color: '#a3e635' }}>f"Selamat datang di kelas pemrograman &#123;bahasa&#125;."</span>
              )
            </div>
          </div>

          {/* Kolom Kanan: Terminal Output & Pipeline State */}
          <div
            style={{
              padding: '16px 20px',
              background: '#06090e',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#64748b', fontSize: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                <i className="fa-solid fa-terminal" style={{ color: '#22c55e' }}></i>
                <span>bash terminal ~/proyek-python</span>
              </div>

              {/* Perintah Terminal */}
              <div style={{ color: '#94a3b8', marginBottom: '10px' }}>
                <span style={{ color: '#22c55e' }}>user@pc:~$</span> python program_pertama.py
              </div>

              {/* Animasi Output Bertahap */}
              <div style={{ minHeight: '70px' }}>
                {activeStep === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#94a3b8', fontSize: '0.78rem' }}>
                    <div style={{ color: '#38bdf8' }}>➜ Membaca file source code teks...</div>
                    <div style={{ color: '#64748b', marginTop: '4px' }}>Sintaks diverifikasi oleh CPython lexer & parser.</div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#a5b4fc', fontSize: '0.78rem' }}>
                    <div style={{ color: '#818cf8' }}>➜ Mengompilasi kode ke instruksi Bytecode...</div>
                    <div style={{ color: '#cbd5e1', marginTop: '4px' }}>Membuat cache: <code>__pycache__/program_pertama.cpython-312.pyc</code></div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#6ee7b7', fontSize: '0.78rem' }}>
                    <div style={{ color: '#34d399' }}>➜ Python Virtual Machine (PVM) sedang aktif:</div>
                    <div style={{ color: '#cbd5e1', marginTop: '4px' }}>Mengeksekusi loop evaluasi instruksi bytecode baris demi baris...</div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} style={{ fontSize: '0.82rem' }}>
                    <div style={{ color: '#22c55e', fontWeight: 600 }}>Halo Dunia, nama saya Budi Santoso!</div>
                    <div style={{ color: '#22c55e', fontWeight: 600 }}>Selamat datang di kelas pemrograman Python.</div>
                    <div style={{ color: '#64748b', marginTop: '8px', fontSize: '0.72rem' }}>[Process finished with exit code 0]</div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Indikator Status Running di Pojok Bawah Terminal */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '6px' }}>
              <span style={{ color: '#64748b' }}>Status Sistem:</span>
              <span style={{ color: steps[activeStep].color, fontWeight: 600 }}>
                {activeStep === 3 ? '✓ Eksekusi Selesai' : `Sedang di Tahap ${activeStep + 1} (${steps[activeStep].label})`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Kotak Analogi Dunia Nyata */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          style={{
            padding: '14px 18px',
            borderRadius: 'var(--radius)',
            background: 'var(--surface-2)',
            border: `1px solid ${steps[activeStep].color}35`,
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              ...iconBoxStyle,
              flexShrink: 0,
              width: '40px',
              height: '40px',
              fontSize: '1.1rem',
              background: `${steps[activeStep].color}18`,
              color: steps[activeStep].color,
            }}
          >
            <i className="fa-solid fa-lightbulb"></i>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
              <strong style={{ color: steps[activeStep].color, fontSize: '0.88rem' }}>
                Analogi Dapur Restoran ({steps[activeStep].title}):
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--fg)', lineHeight: 1.45 }}>
              {steps[activeStep].analogy}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function DeckPertemuan01() {
  return (
    <Deck>
      {/* Slide 1: Cover dengan Logo Resmi Python */}
      <Cover
        nav="Cover"
        notes="Sambut peserta kelas. Jelaskan bahwa hari ini adalah fondasi awal pengenalan Python dan variabel."
        kicker="Kelas Pemrograman Python Dasar · Pertemuan 01"
        title={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <img
              src={pythonLogo}
              alt="Logo Python"
              style={{ width: '64px', height: '64px', filter: 'drop-shadow(0 4px 12px rgba(2, 132, 199, 0.2))' }}
            />
            <div>
              Pengenalan <span className="accent-text">Python</span> & Variabel
            </div>
          </div>
        }
        foot="Mentor: M. Rifaldo Saputra"
      />

      {/* Slide 2: Target Pencapaian */}
      <Slide center nav="Target Pencapaian" notes="Bacakan 2 target pencapaian utama sesuai kurikulum resmi.">
        <div className="kicker">KURIKULUM PEMBELAJARAN</div>
        <h2 className="headline" style={{ marginBottom: '32px' }}>
          Target Pencapaian <span className="accent-text">Pertemuan 1</span>
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '960px',
            marginInline: 'auto',
            textAlign: 'left',
          }}
        >
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={iconBoxStyle}>
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, color: 'var(--fg)' }}>
                1. Mengenal Sejarah & Manfaat
              </h3>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Peserta mengenal asal-usul Python, filosofi desain, kelebihan dan kekurangan, serta mengapa industri global menggunakannya.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={iconBoxStyle}>
                <i className="fa-solid fa-cube"></i>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, color: 'var(--fg)' }}>
                2. Menguasai Konsep Variabel
              </h3>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Peserta dapat mendeklarasikan, menginisialisasikan, dan mengelola variabel menggunakan 4 tipe data dasar secara tepat.
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 3: Sejarah Python & Foto Guido van Rossum */}
      <Slide nav="Pencipta & Sejarah" notes="Perkenalkan profil Guido van Rossum sebagai pencipta Python pada tahun 1991.">
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '36px', alignItems: 'center', maxWidth: '1060px', marginInline: 'auto' }}>
          {/* Kartu Profil Pencipta */}
          <div style={{ ...cardStyle, padding: '16px', textAlign: 'center' }}>
            <img
              src={guidoPortrait}
              alt="Guido van Rossum"
              style={{
                width: '100%',
                height: '260px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '14px',
                border: '1px solid var(--hair)',
              }}
            />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 4px 0', color: 'var(--fg)' }}>
              Guido van Rossum
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, margin: '0 0 6px 0' }}>
              Pencipta Python (1991, Belanda)
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Mantan <em>Benevolent Dictator For Life</em> (BDFL). Mengembangkan Python di CWI Amsterdam.
            </div>
          </div>

          {/* Narasi Asal-usul & Filosofi */}
          <div>
            <div className="kicker">ASAL-USUL & FILOSOFI</div>
            <h2 className="headline" style={{ marginBottom: '16px' }}>
              Kelahiran Bahasa <span className="accent-text">Python</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '18px' }}>
              Python pertama kali dirilis oleh Guido van Rossum pada tahun <strong>1991</strong> di Belanda. Guido merancang Python sebagai bahasa tingkat tinggi yang berfokus pada keterbacaan kode (*readability*) agar programmer dapat menulis konsep dengan baris kode lebih sedikit.
            </p>

            <div style={{ padding: '14px 18px', borderRadius: 'var(--radius-sm)', background: 'var(--surface-2)', border: '1px solid var(--hair)', marginBottom: '18px' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--fg)', lineHeight: 1.6 }}>
                <i className="fa-solid fa-circle-info" style={{ color: 'var(--primary)', marginRight: '8px' }}></i>
                <strong>Fakta Nama:</strong> Terinspirasi dari acara komedi sketsa BBC <em>"Monty Python's Flying Circus"</em>, bukan dari jenis ular piton.
              </div>
            </div>

            <div style={{ ...cardStyle, padding: '16px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={iconBoxStyle}><i className="fa-solid fa-scroll"></i></div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>Prinsip Desain (The Zen of Python)</h4>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', fontSize: '0.88rem', color: 'var(--fg-muted)' }}>
                <div>• <strong style={{ color: 'var(--fg)' }}>Beautiful</strong> is better than ugly</div>
                <div>• <strong style={{ color: 'var(--fg)' }}>Explicit</strong> is better than implicit</div>
                <div>• <strong style={{ color: 'var(--fg)' }}>Simple</strong> is better than complex</div>
                <div>• <strong style={{ color: 'var(--fg)' }}>Readability</strong> counts</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 4: Kelebihan vs Kekurangan */}
      <Contrast
        nav="Kelebihan & Kekurangan"
        notes="Setiap bahasa memiliki trade-off teknis yang perlu dipertimbangkan."
        kicker="KARAKTERISTIK BAHASA"
        title="Kelebihan dan Batasan Python"
        left={{
          label: 'Batasan Teknis',
          title: 'Trade-off Python',
          points: [
            'Eksekusi lebih lambat dibanding bahasa kompilasi seperti C, C++, atau Rust',
            'Konsumsi RAM relatif lebih besar pada pemrosesan skala masif',
            'Bukan ekosistem utama untuk pengembangan aplikasi mobile native Android/iOS',
            'Kesalahan tipe baru diketahui saat program dijalankan (Dynamic Typing)',
          ],
        }}
        right={{
          label: 'Keunggulan Desain',
          title: 'Kelebihan Python',
          points: [
            'Sintaks ringkas dan mendekati bahasa Inggris, menghemat waktu penulisan',
            'Waktu pengembangan (development speed) jauh lebih cepat untuk prototipe',
            'Pustaka bawaan (standard library) sudah menyediakan modul matematika, file, dan HTTP',
            'Ekosistem pustaka pihak ketiga terbesar untuk analisis data dan backend',
          ],
        }}
      />

      {/* Slide 5: Manfaat & Domain Penerapan */}
      <Slide center nav="Manfaat & Domain" notes="Empat bidang industri utama tempat Python digunakan secara luas.">
        <div className="kicker">PENERAPAN DI INDUSTRI</div>
        <h2 className="headline" style={{ marginBottom: '32px' }}>
          Di Mana Saja <span className="accent-text">Python Digunakan?</span>
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1080px',
            marginInline: 'auto',
            textAlign: 'left',
          }}
        >
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={iconBoxStyle}>
                <i className="fa-solid fa-brain"></i>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: 'var(--fg)' }}>Data Science & AI</h3>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
              Mengolah dataset besar, membuat visualisasi grafik, dan melatih model Machine Learning.
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
              NumPy · Pandas · PyTorch
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={iconBoxStyle}>
                <i className="fa-solid fa-network-wired"></i>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: 'var(--fg)' }}>Web Backend</h3>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
              Membangun server backend, mengelola database relasional, dan menyajikan REST API.
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
              FastAPI · Django · Flask
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={iconBoxStyle}>
                <i className="fa-solid fa-gears"></i>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: 'var(--fg)' }}>Otomasi Tugas</h3>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
              Mengotomatiskan pemrosesan file Excel/PDF massal, pemindahan data, dan scraping web.
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
              Selenium · OpenPyXL · Requests
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={iconBoxStyle}>
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: 'var(--fg)' }}>Keamanan Jaringan & IoT</h3>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
              Membuat skrip audit keamanan jaringan, pengujian penetrasi, dan pemrograman mikrokontroler.
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
              Scapy · Cryptography · MicroPython
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 6: Section Divider: Setup & Install */}
      <Section
        nav="Setup & Instalasi"
        number="02"
        title="Persiapan Lingkungan Kerja"
        subtitle="Instalasi Python di Komputer dan Konfigurasi Terminal"
      />

      {/* Slide 7: Langkah Instalasi */}
      <Steps
        nav="Langkah Install"
        notes="Pastikan kotak Add python.exe to PATH dicentang agar Python dapat dipanggil dari terminal mana pun."
        kicker="PANDUAN INSTALASI"
        title="3 Langkah Memasang Python"
        items={[
          {
            title: '1. Unduh Installer',
            body: 'Buka python.org/downloads dan unduh versi stabil terbaru untuk sistem operasi Anda.',
          },
          {
            title: '2. Centang Opsi PATH',
            body: 'Centang kotak "Add python.exe to PATH" pada jendela pertama installer sebelum menekan Install Now.',
          },
          {
            title: '3. Uji di Terminal',
            body: 'Buka terminal (CMD / PowerShell / Terminal Mac) lalu jalankan: python --version untuk memverifikasi instalasi.',
          },
        ]}
      />

      {/* Slide 8: Di Balik Layar (Visualisasi & Animasi Interaktif Python Bekerja) */}
      <Slide center nav="Di Balik Layar" notes="Animasi interaktif menunjukkan alur data: Source Code dikompilasi jadi Bytecode, dieksekusi PVM, dan ditampilkan oleh CPU.">
        <AnimatedPythonPipeline />
      </Slide>

      {/* Slide 9: Mode 1 - Interaktif (REPL) */}
      <Slide nav="Mode REPL" notes="Jelaskan penggunaan Python REPL untuk eksperimen cepat per baris.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '32px', alignItems: 'center' }}>
          <div>
            <div className="kicker">EKSEKUSI CARA 1</div>
            <h2 className="headline" style={{ marginBottom: '16px' }}>
              Mode Interaktif <span className="accent-text">(REPL)</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
              <strong>REPL</strong> singkatan dari <em>Read-Eval-Print Loop</em>. Python langsung mengevaluasi dan mencetak hasil setiap baris instruksi secara seketika di terminal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ ...cardStyle, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={iconBoxStyle}><i className="fa-solid fa-bolt"></i></div>
                <div>
                  <strong style={{ color: 'var(--fg)', fontSize: '0.9rem' }}>Kelebihan Utama:</strong>
                  <div style={{ color: 'var(--fg-muted)', fontSize: '0.85rem' }}>Sangat cepat untuk eksperimen sintaks, kalkulasi, dan testing fungsi.</div>
                </div>
              </div>

              <div style={{ ...cardStyle, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={iconBoxStyle}><i className="fa-solid fa-arrow-right-from-bracket"></i></div>
                <div>
                  <strong style={{ color: 'var(--fg)', fontSize: '0.9rem' }}>Cara Keluar:</strong>
                  <div style={{ color: 'var(--fg-muted)', fontSize: '0.85rem' }}>Ketik perintah <code>exit()</code> atau tekan <code>Ctrl + Z</code> (Windows) / <code>Ctrl + D</code> (Mac/Linux).</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <CodeWindow
              title="Terminal Interaktif (REPL)"
              code={`# 1. Buka terminal lalu ketik perintah python
$ python
Python 3.12.0 (main, Oct 2026) [MSC v.1936 64 bit (AMD64)]
Type "help", "copyright", "credits" or "license" for more info.

# 2. Ketik kode langsung setelah tanda prompt (>>>)
>>> nama = "Budi Santoso"
>>> print(f"Halo, {nama}!")
Halo, Budi Santoso!

>>> 25 * 4
100

# 3. Keluar dari REPL
>>> exit()`}
            />
          </div>
        </div>
      </Slide>

      {/* Slide 10: Mode 2 - Script File (.py) */}
      <Slide nav="Mode Script" notes="Jelaskan pembuatan file script .py permanen untuk aplikasi nyata.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '32px', alignItems: 'center' }}>
          <div>
            <div className="kicker">EKSEKUSI CARA 2</div>
            <h2 className="headline" style={{ marginBottom: '16px' }}>
              Mode Script File <span className="accent-text">(.py)</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Seluruh kode ditulis ke dalam file teks berekstensi <code>.py</code> menggunakan editor (seperti VS Code), lalu interpreter mengeksekusi seluruh program dari awal hingga akhir.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ ...cardStyle, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={iconBoxStyle}><i className="fa-solid fa-floppy-disk"></i></div>
                <div>
                  <strong style={{ color: 'var(--fg)', fontSize: '0.9rem' }}>Tersimpan Permanen:</strong>
                  <div style={{ color: 'var(--fg-muted)', fontSize: '0.85rem' }}>Kode dapat disimpan, diubah kembali (*edit*), dan dibagikan ke orang lain.</div>
                </div>
              </div>

              <div style={{ ...cardStyle, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={iconBoxStyle}><i className="fa-solid fa-play"></i></div>
                <div>
                  <strong style={{ color: 'var(--fg)', fontSize: '0.9rem' }}>Perintah Eksekusi:</strong>
                  <div style={{ color: 'var(--fg-muted)', fontSize: '0.85rem' }}>Jalankan di terminal dengan: <code>python nama_file.py</code></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Jendela 1: Code Editor (Menulis File halo.py) */}
            <CodeWindow
              title="1. VS Code Editor — halo.py"
              code={`# File: halo.py
nama_proyek = "Kelas Python Dasar"
pertemuan = 1

print(f"Materi: {nama_proyek}")
print(f"Sedang berlangsung pertemuan ke-{pertemuan}")`}
            />

            {/* Jendela 2: Terminal Eksekusi (Menjalankan File) */}
            <CodeWindow
              title="2. Terminal Bash — Eksekusi Program"
              code={`$ python halo.py
Materi: Kelas Python Dasar
Sedang berlangsung pertemuan ke-1

# Selesai dieksekusi tanpa error`}
            />
          </div>
        </div>
      </Slide>

      {/* Slide 9: Section Divider: Variabel */}
      <Section
        nav="Konsep Variabel"
        number="03"
        title="Memulai dengan Variabel"
        subtitle="Deklarasi, Inisialisasi, dan Aturan Penamaan Standar PEP 8"
      />

      {/* Slide 10: Apa itu Variabel? */}
      <Slide nav="Definisi Variabel" notes="Gunakan analogi wadah penyimpanan data berlabel nama di dalam memori komputer.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '32px', alignItems: 'center' }}>
          <div>
            <div className="kicker">DASAR MEMORI</div>
            <h2 className="headline" style={{ marginBottom: '20px' }}>
              Apa itu <span className="accent-text">Variabel?</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Variabel adalah <strong>wadah penyimpanan di memori komputer</strong> untuk menampung nilai data tertentu.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ ...cardStyle, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={iconBoxStyle}><i className="fa-solid fa-tag"></i></div>
                <div>
                  <strong style={{ color: 'var(--fg)' }}>Nama Variabel:</strong>
                  <span style={{ color: 'var(--fg-muted)', marginLeft: '8px' }}>Label pengenal wadah (contoh: <code>nama_siswa</code>)</span>
                </div>
              </div>
              <div style={{ ...cardStyle, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={iconBoxStyle}><i className="fa-solid fa-equals"></i></div>
                <div>
                  <strong style={{ color: 'var(--fg)' }}>Operator Penugasan (<code>=</code>):</strong>
                  <span style={{ color: 'var(--fg-muted)', marginLeft: '8px' }}>Memasukkan data ke dalam wadah</span>
                </div>
              </div>
              <div style={{ ...cardStyle, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={iconBoxStyle}><i className="fa-solid fa-database"></i></div>
                <div>
                  <strong style={{ color: 'var(--fg)' }}>Nilai (Value):</strong>
                  <span style={{ color: 'var(--fg-muted)', marginLeft: '8px' }}>Data yang disimpan (contoh: <code>"Budi"</code>)</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <CodeWindow
              title="variabel_dasar.py"
              code={`# Deklarasi dan Inisialisasi Langsung
nama_siswa = "Ahmad Faiz"
usia = 20

# Re-assignment (mengubah isi wadah)
usia = 21           # Nilai 20 digantikan oleh 21`}
            />

            {/* Visualisasi Analogi Kotak Memori RAM */}
            <div
              style={{
                ...cardStyle,
                padding: '16px',
                background: 'var(--surface-2)',
                border: '1px dashed var(--primary)',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <i className="fa-solid fa-box-open" style={{ marginRight: '6px' }}></i>
                Analogi Kotak Berlabel di Memori (RAM)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', textAlign: 'center' }}>
                <div style={{ padding: '12px', background: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--hair)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', marginBottom: '4px' }}>LABEL KOTAK</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>nama_siswa</div>
                  <div style={{ marginTop: '8px', padding: '6px', background: 'var(--surface-2)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--fg)' }}>
                    "Ahmad Faiz"
                  </div>
                </div>

                <div style={{ padding: '12px', background: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--hair)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', marginBottom: '4px' }}>LABEL KOTAK</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>usia</div>
                  <div style={{ marginTop: '8px', padding: '6px', background: 'var(--surface-2)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--fg)' }}>
                    <span style={{ textDecoration: 'line-through', color: 'var(--fg-muted)', marginRight: '6px' }}>20</span>
                    <strong style={{ color: 'var(--primary)' }}>21</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 11: Aturan Penamaan Variabel */}
      <Slide center nav="Aturan Penamaan" notes="Jelaskan aturan sintaks penamaan dan mengapa snake_case adalah standar Python.">
        <div className="kicker">KONVENSI PEP 8</div>
        <h2 className="headline" style={{ marginBottom: '28px' }}>
          Aturan Penamaan <span className="accent-text">Variabel</span>
        </h2>
        <div style={{ maxWidth: '960px', marginInline: 'auto' }}>
          <Table
            columns={[
              { label: 'Kategori', align: 'left' },
              { label: 'Contoh Valid (Dianjurkan)', align: 'left' },
              { label: 'Contoh Salah (Dilarang)', align: 'left' },
              { label: 'Alasan & Dampak', align: 'left' },
            ]}
            rows={[
              [
                <strong>Karakter Awal</strong>,
                <code style={{ color: '#059669', background: 'rgba(5, 150, 105, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>nama, _token</code>,
                <code style={{ color: '#dc2626', background: 'rgba(220, 38, 38, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>1nama, 9total</code>,
                'SyntaxError: Nama variabel dilarang diawali oleh angka',
              ],
              [
                <strong>Pemisah Kata</strong>,
                <code style={{ color: '#059669', background: 'rgba(5, 150, 105, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>nama_lengkap, total_harga</code>,
                <code style={{ color: '#dc2626', background: 'rgba(220, 38, 38, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>nama lengkap, nama-lengkap</code>,
                'Spasi atau tanda minus (-) dianggap operator pengurangan',
              ],
              [
                <strong>Simbol Khusus</strong>,
                <code style={{ color: '#059669', background: 'rgba(5, 150, 105, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>skor_akhir, total_poin</code>,
                <code style={{ color: '#dc2626', background: 'rgba(220, 38, 38, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>skor$, total@, harga%</code>,
                'Karakter khusus dilindungi sebagai token sintaks bahasa',
              ],
              [
                <strong>Kata Kunci Sistem</strong>,
                <code style={{ color: '#059669', background: 'rgba(5, 150, 105, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>perulangan, jumlah</code>,
                <code style={{ color: '#dc2626', background: 'rgba(220, 38, 38, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>for, if, class, def</code>,
                'Reserved keyword tidak dapat digunakan sebagai nama pengenal',
              ],
              [
                <strong>Sensitivitas Huruf</strong>,
                <code style={{ color: '#059669', background: 'rgba(5, 150, 105, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>Usia ≠ usia ≠ USIA</code>,
                <span style={{ color: 'var(--fg-faint)' }}>-</span>,
                'Python bersifat Case-Sensitive (ketiganya adalah 3 variabel berbeda)',
              ],
            ]}
            caption="Standar Konvensi Penamaan Variabel (PEP 8 Style Guide for Python)"
          />
        </div>
      </Slide>

      {/* Slide 12: 4 Tipe Data Dasar */}
      <Slide center nav="4 Tipe Data Dasar" notes="Perkenalkan 4 tipe primitif fundamental yang wajib dikuasai pemula.">
        <div className="kicker">TIPE DATA PRIMITIF</div>
        <h2 className="headline" style={{ marginBottom: '32px' }}>
          4 Tipe Data <span className="accent-text">Primitif Dasar</span>
        </h2>
        <div style={{ maxWidth: '1000px', marginInline: 'auto' }}>
          <Tabs
            tabs={[
              {
                label: 'String (str)',
                content: (
                  <div style={{ textAlign: 'left', padding: '10px' }}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.2rem', fontWeight: 600 }}>
                      Tipe Data String (str)
                    </h4>
                    <p style={{ color: 'var(--fg-muted)', marginBottom: '14px' }}>
                      Menyimpan data teks atau karakter. Wajib diapit oleh tanda petik tunggal (<code>'...'</code>) atau ganda (<code>"..."</code>).
                    </p>
                    <CodeWindow title="string_demo.py" code={`nama = "Budi Santoso"\nalamat = 'Jakarta Selatan'\npesan = "Belajar Python itu menyenangkan!"`} />
                  </div>
                ),
              },
              {
                label: 'Integer (int)',
                content: (
                  <div style={{ textAlign: 'left', padding: '10px' }}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.2rem', fontWeight: 600 }}>
                      Tipe Data Integer (int)
                    </h4>
                    <p style={{ color: 'var(--fg-muted)', marginBottom: '14px' }}>
                      Bilangan bulat positif, negatif, atau nol tanpa tanda koma desimal.
                    </p>
                    <CodeWindow title="integer_demo.py" code={`jumlah_siswa = 30\ntahun = 2026\nsuhu_beku = -5`} />
                  </div>
                ),
              },
              {
                label: 'Float (float)',
                content: (
                  <div style={{ textAlign: 'left', padding: '10px' }}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.2rem', fontWeight: 600 }}>
                      Tipe Data Float (float)
                    </h4>
                    <p style={{ color: 'var(--fg-muted)', marginBottom: '14px' }}>
                      Bilangan pecahan atau desimal. Menggunakan tanda titik (<code>.</code>) sebagai pemisah pecahan.
                    </p>
                    <CodeWindow title="float_demo.py" code={`tinggi_badan = 175.5\nipk = 3.92\npi = 3.14159`} />
                  </div>
                ),
              },
              {
                label: 'Boolean (bool)',
                content: (
                  <div style={{ textAlign: 'left', padding: '10px' }}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.2rem', fontWeight: 600 }}>
                      Tipe Data Boolean (bool)
                    </h4>
                    <p style={{ color: 'var(--fg-muted)', marginBottom: '14px' }}>
                      Nilai kebenaran logika. Hanya bernilai <code>True</code> atau <code>False</code> (huruf awal wajib kapital).
                    </p>
                    <CodeWindow title="bool_demo.py" code={`is_lulus = True\nsudah_selesai = False\nstatus_aktif = True`} />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </Slide>

      {/* Slide 13: Menampilkan Variabel & f-string */}
      <Slide nav="Format f-string" notes="Ajarkan f-string sebagai standar emas penulisan string dinamis di Python.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '32px', alignItems: 'center' }}>
          <div>
            <div className="kicker">STANDAR MODERN</div>
            <h2 className="headline" style={{ marginBottom: '20px' }}>
              Menampilkan Variabel dengan <span className="accent-text">f-string</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Mulai Python 3.6+, cara terbaik dan paling terbaca untuk menggabungkan teks dengan nilai variabel adalah menggunakan <strong>Formatted String (f-string)</strong>.
            </p>
            <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', background: 'var(--surface-2)', border: '1px solid var(--hair)' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--fg)', lineHeight: 1.8 }}>
                • Awali tanda petik dengan huruf <code>f"..."</code><br />
                • Masukkan nama variabel di dalam kurung kurawal <code>{`{variabel}`}</code>
              </div>
            </div>
          </div>

          <div>
            <CodeWindow
              title="fstring_demo.py"
              code={`nama = "Siti Rahma"
usia = 21
ipk = 3.88

# Format string modern f-string
pesan = f"Halo! Nama saya {nama}, usia {usia} tahun dengan IPK {ipk}."
print(pesan)

# Menghitung ekspresi langsung di dalam kurung kurawal
print(f"Usia saya 5 tahun lagi adalah {usia + 5} tahun.")`}
            />
          </div>
        </div>
      </Slide>

      {/* Slide 14: Praktikum & Latihan Siswa */}
      <Slide center nav="Praktikum" notes="Arahkan peserta untuk mencoba contoh kode dan mengerjakan lembar kerja latihan_mandiri.py.">
        <div className="kicker">LEMBAR KERJA PRAKTIK</div>
        <h2 className="headline" style={{ marginBottom: '32px' }}>
          Hands-on Praktikum <span className="accent-text">Pertemuan 01</span>
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            maxWidth: '960px',
            marginInline: 'auto',
            textAlign: 'left',
          }}
        >
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={iconBoxStyle}>
                <i className="fa-solid fa-folder-open"></i>
              </div>
              <h4 style={{ fontWeight: 600, color: 'var(--fg)', margin: 0 }}>
                Folder contoh/
              </h4>
            </div>
            <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--fg-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><code>01_halo_python.py</code> : Print & komentar</li>
              <li><code>02_deklarasi_variabel.py</code> : Inisialisasi & PEP 8</li>
              <li><code>03_tipe_data_dasar.py</code> : 4 Tipe & type()</li>
              <li><code>04_menampilkan_variabel.py</code> : f-string output</li>
              <li><code>05_input_variabel_sederhana.py</code> : Input keyboard</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={iconBoxStyle}>
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
              <h4 style={{ fontWeight: 600, color: 'var(--fg)', margin: 0 }}>
                Folder latihan/
              </h4>
            </div>
            <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--fg-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Soal 1:</strong> Memperbaiki penamaan variabel tidak valid</li>
              <li><strong>Soal 2:</strong> Mendeklarasikan 4 tipe data primitif</li>
              <li><strong>Soal 3:</strong> Membuat kartu profil dengan format f-string</li>
              <li><strong>Soal 4:</strong> Re-assignment nilai skor game</li>
              <li>Template pengerjaan di <code>latihan_mandiri.py</code></li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 15: Penutup & Teaser Pertemuan Selanjutnya */}
      <Slide center nav="Penutup" notes="Ringkasan capaian hari ini dan topik Git pada pertemuan berikutnya.">
        <div className="kicker">RANGKUMAN SESI</div>
        <h1 className="headline" style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
          Dasar Python Telah <span className="accent-text">Selesai Dipelajari</span>
        </h1>
        <p style={{ color: 'var(--fg-muted)', fontSize: '1.1rem', maxWidth: '640px', marginInline: 'auto', marginBottom: '32px' }}>
          Hari ini Anda telah menjalankan Python di terminal, memahami tipe data primitif, dan mendeklarasikan variabel sesuai standar PEP 8.
        </p>

        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '20px 28px',
            borderRadius: 'var(--radius)',
            background: 'var(--surface)',
            border: '1px solid var(--hair)',
            boxShadow: 'var(--shadow)',
            maxWidth: '680px',
            marginInline: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', letterSpacing: '0.04em' }}>
            <i className="fa-solid fa-code-branch"></i>
            <span>PERTEMUAN 02 BERIKUTNYA</span>
          </div>

          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg)' }}>
            Version Control System (VCS) & Git Dasar
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>
            Menyimpan riwayat revisi kode Python, membuat branch, dan mengunggah repositori ke <strong>GitHub</strong>.
          </p>

          <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
            <span style={{ fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-2)', border: '1px solid var(--hair)', color: 'var(--fg)' }}>
              <i className="fa-brands fa-git-alt" style={{ color: '#f05032', marginRight: '6px' }}></i>
              Git
            </span>
            <span style={{ fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-2)', border: '1px solid var(--hair)', color: 'var(--fg)' }}>
              <i className="fa-brands fa-github" style={{ marginRight: '6px' }}></i>
              GitHub
            </span>
            <span style={{ fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px', background: 'var(--surface-2)', border: '1px solid var(--hair)', color: 'var(--fg)' }}>
              <i className="fa-solid fa-clock-rotate-left" style={{ color: 'var(--primary)', marginRight: '6px' }}></i>
              Commit & History
            </span>
          </div>
        </div>
      </Slide>
    </Deck>
  );
}
