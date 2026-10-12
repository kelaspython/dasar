# 📝 Soal Latihan: Pertemuan 04

Kerjakan soal-soal latihan berikut pada file `latihan_mandiri.py` untuk menguji pemahaman Anda mengenai List dan Tuple.

---

## 📌 Soal 1: Analisis Nilai Kelas
Diberikan sebuah list nilai ujian siswa sebagai berikut:
`nilai_kelas = [75, 80, 92, 65, 88, 70, 95, 60, 84, 90]`

Tulis kode untuk:
1. Menghitung dan menampilkan:
   - Jumlah siswa yang mengikuti ujian (`len`)
   - Nilai terendah (`min`)
   - Nilai tertinggi (`max`)
   - Nilai rata-rata kelas (`sum / len`)
2. Menggunakan **List Comprehension** untuk membuat list baru `lulus` yang hanya berisi nilai siswa $\ge 75$.
3. Menampilkan daftar nilai yang sudah terurut dari nilai tertinggi ke terendah (*descending*).

---

## 📌 Soal 2: Keranjang Belanja Interaktif (To-Do / Cart)
Buatlah program keranjang belanja berbasis CLI:
1. Mulai dengan keranjang kosong: `keranjang = []`.
2. Gunakan `while True` untuk menampilkan menu:
   - `1. Tambah Barang`
   - `2. Hapus Barang`
   - `3. Lihat Isi Keranjang`
   - `4. Selesai / Keluar`
3. Pastikan pengguna mendapat konfirmasi pesan yang ramah pada setiap aksi.

---

## 📌 Soal 3: Data Koordinat Titik 2D (Tuple)
Diberikan list kumpulan titik koordinat 2D:
`titik_list = [(2, 3), (-1, 5), (4, -2), (0, 0), (7, 8)]`

1. Gunakan perulangan `for` dan tuple unpacking `for x, y in titik_list:` untuk mencetak koordinat dalam format: `Titik ke-1: Koordinat (X=2, Y=3)`.
2. Gunakan list comprehension untuk mengambil semua titik yang berada di kuadran 1 (di mana $x > 0$ dan $y > 0$).
