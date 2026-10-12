# Pertemuan 01: Pengenalan Python dan Variabel

Selamat datang di materi pertemuan pertama kursus **Pemrograman Python Dasar**! Modul ini dirancang khusus untuk pemula yang belum pernah memprogram sebelumnya, dengan fokus memahami konsep dasar bahasa Python, kelebihan dan kekurangannya, proses instalasi, serta cara mendeklarasikan dan menginisialisasikan variabel.

---

## 🎯 Target Pencapaian Pembelajaran

Sesuai silabus resmi:
1. **Mengenal Sejarah dan Manfaat**: Peserta memahami asal-usul Python, filosofinya, serta bidang-bidang penerapannya di dunia nyata.
2. **Kelebihan & Kekurangan**: Peserta mengerti keunggulan sintaks Python dan keterbatasannya dibandingkan bahasa lain.
3. **Instalasi & Menjalankan Kode**: Peserta mampu memasang Python, mengonfigurasi editor (VS Code), dan menjalankan kode baik melalui mode REPL maupun file `.py`.
4. **Mendeklarasikan dan Menginisialisasikan Variabel**: Peserta mampu membuat variabel dengan penamaan yang benar (PEP 8), memahami tipe data primitif, serta menampilkan variabel ke layar.

*(Catatan: Modul pertemuan 1 belum mencakup logika percabangan/control flow maupun perulangan/looping).*

---

## 📂 Struktur Folder Modul Pertemuan 01

```
pertemuan-01-pengenalan-dan-variabel/
├── DeckPertemuan01.tsx                 # Slide presentasi interaktif (Bolt Slides React Component)
├── README.md                           # Modul pegangan & rangkuman materi lengkap
├── contoh/                             # Contoh kode program siap jalan
│   ├── 01_halo_python.py               # Print pertama, komentar single & multi-line
│   ├── 02_deklarasi_variabel.py        # Deklarasi, inisialisasi, re-assign, aturan nama
│   ├── 03_tipe_data_dasar.py           # int, float, str, bool & fungsi type()
│   ├── 04_menampilkan_variabel.py      # Format output & f-string
│   └── 05_input_variabel_sederhana.py  # Menyimpan input pengguna ke variabel
└── latihan/                            # Lembar latihan praktikum mandiri
    ├── soal_latihan.md                 # Deskripsi tugas & instruksi studi kasus
    ├── latihan_mandiri.py              # Template kosong pengerjaan siswa
    └── solusi/
        └── solusi_latihan.py           # Kunci jawaban & referensi pengajar
```

---

## 📖 Rangkuman Materi Pembelajaran

### 1. Sejarah & Filosofi Python
- **Pencipta**: Dibuat oleh **Guido van Rossum** di Belanda, dirilis perdana pada tahun **1991**.
- **Asal Nama**: Terinspirasi dari grup lawak komedi Inggris *"Monty Python's Flying Circus"*, bukan dari nama reptil/ular.
- **Filosofi (The Zen of Python)**:
  - *Readability counts* (Keterbacaan kode adalah hal yang utama).
  - *Simple is better than complex* (Sederhana lebih baik daripada rumit).
  - *Explicit is better than implicit* (Eksplisit lebih baik daripada implisit).

### 2. Kelebihan & Kekurangan Python
- **Kelebihan**:
  - Sintaksis sangat sederhana dan mudah dipahami, mirip bahasa Inggris.
  - Produktivitas tinggi (menulis kode lebih cepat dibanding C++ atau Java).
  - Memiliki perpustakaan bawaan (*Standard Library*) yang sangat kaya (*Batteries Included*).
  - Didukung oleh komunitas global yang sangat besar.
- **Kekurangan**:
  - Kecepatan eksekusi lebih lambat dibandingkan bahasa kompilasi seperti C/C++/Rust karena Python adalah bahasa *interpreted*.
  - Konsumsi memori lebih besar.
  - Kurang lazim digunakan untuk aplikasi mobile native (Android/iOS).

### 3. Pemanfaatan di Industri
Python digunakan di berbagai sektor:
- **Artificial Intelligence & Data Science**: Machine Learning, Analisis Data, Deep Learning.
- **Web Development**: Backend development menggunakan framework FastAPI, Django, Flask.
- **Automation & Scripting**: Bot otomasi pekerjaan rutin, web scraping, pengujian sistem.
- **Cybersecurity & Networking**: Pembuatan script analisis paket data, pentesting, dan IoT.

### 4. Panduan Instalasi & Eksekusi
1. Kunjungi situs resmi [python.org/downloads](https://www.python.org/downloads/).
2. Unduh installer dan jalankan.
3. ⚠️ **PENTING**: Centang opsi **"Add python.exe to PATH"** di layar pertama instalasi.
4. Buka terminal (CMD / PowerShell / Terminal Mac/Linux) dan verifikasi:
   ```bash
   python --version
   ```
5. **Dua Cara Menjalankan Python**:
   - **Mode Interaktif (REPL)**: Ketik `python` di terminal -> coba ketik kode -> ketik `exit()` untuk keluar.
   - **Mode Script File**: Simpan kode dalam file berekstensi `.py`, lalu jalankan dengan perintah: `python nama_file.py`.

### 5. Deklarasi & Inisialisasi Variabel
- **Variabel** adalah wadah di memori untuk menyimpan nilai.
- Di Python, variabel dibuat secara otomatis saat pertama kali diberi nilai menggunakan operator penugasan (`=`):
  ```python
  nama_depan = "Budi"  # Deklarasi sekaligus inisialisasi
  umur = 20
  ```
- **Aturan Penamaan (PEP 8)**:
  - Gunakan gaya `snake_case` (huruf kecil dengan pemisah garis bawah).
  - Karakter pertama harus berupa huruf atau garis bawah (`_`).
  - Tidak boleh mengandung spasi atau tanda minus (`-`).
  - Tidak boleh menggunakan kata kunci sistem (*reserved keywords*) seperti `if`, `for`, `class`, `def`.
  - Bersifat *case-sensitive* (`nilai` berbeda dengan `Nilai`).

### 6. Tipe Data Primitif Dasar
- `str` (String): Teks diapit tanda petik, contoh `"Python"`, `'Halo'`.
- `int` (Integer): Bilangan bulat, contoh `42`, `-5`, `0`.
- `float` (Float): Bilangan pecahan desimal, contoh `3.14`, `-0.5`.
- `bool` (Boolean): Bernilai kebenaran `True` atau `False`.

---

## 🚀 Cara Menjalankan Slide Presentasi

Pastikan dependensi Slidev sudah terpasang di root direktori:

```bash
# Menjalankan slide interaktif di browser
npm run dev:p01
```

Slide akan langsung dibuka di browser Anda pada alamat `http://localhost:3030`.
