# 🐍 Kurikulum & Materi Python Dasar

Repositori ini berisi kurikulum lengkap pembelajaran **Python Dasar** yang terbagi menjadi **8 Pertemuan**. Setiap pertemuan disusun modular di dalam foldernya masing-masing, lengkap dengan:
- 📊 **Slide Presentasi Interaktif** (menggunakan [Slidev](https://sli.dev/) berbasis Markdown)
- 📖 **Rangkuman & Catatan Materi** (`README.md` terstruktur)
- 💻 **Contoh Kode Program** (`.py` yang bisa langsung dijalankan)
- 📝 **Soal Latihan, Tugas, dan Solusi**

---

## 🗺️ Silabus Pertemuan

| No | Modul / Folder | Topik Utama |
|---|---|---|
| **01** | [`pertemuan-01-pengenalan-dan-variabel/`](./pertemuan-01-pengenalan-dan-variabel/) | **Pengenalan Python dan Variabel**:<br>• Sejarah, manfaat, kelebihan & kekurangan Python<br>• Cara install (Python & VS Code) dan cara pakai (REPL vs Script)<br>• Menulis kode pertama & komentar<br>• Deklarasi & inisialisasi variabel, aturan penamaan (PEP 8)<br>• 4 Tipe data dasar (`str`, `int`, `float`, `bool`) & modern f-string |
| **02** | [`pertemuan-02-operator-dan-percabangan/`](./pertemuan-02-operator-dan-percabangan/) | Operator Aritmatika, Komparasi, Logika, Pengkondisian (`if`, `elif`, `else`) |
| **03** | [`pertemuan-03-perulangan-looping/`](./pertemuan-03-perulangan-looping/) | Loop `for`, `while`, fungsi `range()`, kontrol `break`, `continue`, `pass` |
| **04** | [`pertemuan-04-struktur-data-list-tuple/`](./pertemuan-04-struktur-data-list-tuple/) | List (Indexing, Slicing, Manipulasi, Comprehension) & Tuple (Immutability, Unpacking) |
| **05** | [`pertemuan-05-struktur-data-dict-set/`](./pertemuan-05-struktur-data-dict-set/) | Dictionary (Key-Value pairs, method bawaan) & Set (Koleksi Unik, Operasi Himpunan) |
| **06** | [`pertemuan-06-fungsi-dan-modularisasi/`](./pertemuan-06-fungsi-dan-modularisasi/) | Fungsi (`def`, parameter, `return`, `*args`, `**kwargs`), Lambda, Import Modul |
| **07** | [`pertemuan-07-file-handling-dan-error-handling/`](./pertemuan-07-file-handling-dan-error-handling/) | Baca & Tulis File (`with open`), Penanganan Error & Exception (`try-except`) |
| **08** | [`pertemuan-08-dasar-oop-dan-mini-project/`](./pertemuan-08-dasar-oop-dan-mini-project/) | Konsep Dasar OOP (Class, Object, Method) & Mini Project Aplikasi CLI Komprehensif |

---

## ⚡ Cara Menjalankan Slide Presentasi (Bolt Slides)

Slide presentasi dibangun menggunakan **[Bolt Slides (StackBlitz)](https://github.com/stackblitz/bolt-slides)** — engine presentasi modern berbasis **Vite + React + Framer Motion**:
- 📱 **Fully Responsive**: Menyesuaikan dengan ukuran layar monitor, proyektor, hingga tablet tanpa canvas kaku.
- 🎨 **Komponen Interaktif**: Mendukung `CodeWindow`, `Tabs`, `Steps`, `Contrast`, `Bento`, `TiltCard`, dan `Table`.
- 🎙️ **Fitur Presenter Terintegrasi**: Floating glass dock, thumbnail rail, mode presenter (`P`), overview (`O`), dan live pen annotator (`A`).

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Presentasi
```bash
npm run dev
```

Buka browser Anda di **[http://127.0.0.1:5173/](http://127.0.0.1:5173/)**.

### 3. Pintasan Keyboard Selama Presentasi
- **`Panah Kanan` / `Spasi`**: Pindah ke slide berikutnya (atau step berikutnya).
- **`Panah Kiri`**: Kembali ke slide sebelumnya.
- **`P`**: Toggle Presenter Mode (melihat timer & catatan presenter).
- **`O`**: Toggle Grid Overview (melihat thumbnail semua slide).
- **`A`**: Mengaktifkan Pen Annotator (mencoret/menggambar di atas slide).
- **`F`**: Layar penuh (*Fullscreen*).

---

## 💻 Cara Menjalankan Kode Python

Setiap folder pertemuan memiliki sub-folder `contoh/` dan `latihan/`. Anda dapat menjalankannya langsung menggunakan Python:

```bash
# Menjalankan contoh kode
python pertemuan-01-pengenalan-dan-variabel/contoh/01_hello_world.py

# Menjalankan latihan
python pertemuan-01-pengenalan-dan-variabel/latihan/latihan_mandiri.py
```
