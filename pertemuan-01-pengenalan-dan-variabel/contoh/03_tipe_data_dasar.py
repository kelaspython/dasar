# ==============================================================================
# Pertemuan 01 - Contoh 03: 4 Tipe Data Primitif Dasar & Fungsi type()
# ==============================================================================

# 1. Tipe Data String (str) - Teks
judul_buku = "Belajar Python untuk Pemula"
karakter_simbol = "★"

# 2. Tipe Data Integer (int) - Bilangan Bulat
jumlah_halaman = 350
suhu_beku = -10
tahun = 2026

# 3. Tipe Data Float (float) - Bilangan Pecahan Desimal
harga_diskon = 89.500
tinggi_badan = 172.8
pi = 3.14159

# 4. Tipe Data Boolean (bool) - Nilai Kebenaran
sudah_dibaca = True
buku_hilang = False

# 5. Memeriksa Tipe Data dengan Fungsi type()
print("=== MENGECEK TIPE DATA VARIABEL ===")
print("judul_buku      :", judul_buku, "-> Tipe:", type(judul_buku))
print("jumlah_halaman  :", jumlah_halaman, "-> Tipe:", type(jumlah_halaman))
print("tinggi_badan    :", tinggi_badan, "-> Tipe:", type(tinggi_badan))
print("sudah_dibaca    :", sudah_dibaca, "-> Tipe:", type(sudah_dibaca))
print()

# 6. Sifat Dynamic Typing pada Python
# Sebuah variabel dapat berubah tipe data secara otomatis jika nilainya diganti
data = 100
print("Data awal (angka) :", data, "| Tipe:", type(data))

data = "Seratus"
print("Data baru (teks)  :", data, "| Tipe:", type(data))
