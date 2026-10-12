# ==============================================================================
# KUNCI JAWABAN / REFERENSI SOLUSI: Latihan Pertemuan 01
# Topik: Pengenalan Python & Variabel
# ==============================================================================

print("=== SOLUSI SOAL 1: Koreksi Penamaan Variabel ===")
# 1nama -> nama_1 (angka tidak boleh di awal)
nama_1 = "Budi Santoso"

# nama lengkap -> nama_lengkap (tidak boleh ada spasi)
nama_lengkap = "Budi Santoso"

# harga-barang -> harga_barang (tidak boleh tanda minus '-')
harga_barang = 50000

# for -> kata_kunci_for (for adalah reserved keyword Python)
kata_kunci_for = "Perulangan"

print("Variabel berhasil diperbaiki:")
print("- nama_1        :", nama_1)
print("- nama_lengkap  :", nama_lengkap)
print("- harga_barang  :", harga_barang)
print("- kata_kunci_for:", kata_kunci_for)
print()


print("=== SOLUSI SOAL 2: Eksplorasi 4 Tipe Data Primitif ===")
nama_laptop = "ThinkPad X1 Carbon"
kapasitas_ram_gb = 16
ukuran_layar_inci = 14.0
memiliki_garansi = True

print(f"nama_laptop       : {nama_laptop} (Tipe: {type(nama_laptop)})")
print(f"kapasitas_ram_gb  : {kapasitas_ram_gb} (Tipe: {type(kapasitas_ram_gb)})")
print(f"ukuran_layar_inci : {ukuran_layar_inci} (Tipe: {type(ukuran_layar_inci)})")
print(f"memiliki_garansi  : {memiliki_garansi} (Tipe: {type(memiliki_garansi)})")
print()


print("=== SOLUSI SOAL 3: Kartu Profil Belajar Menggunakan f-string ===")
nama_profil = "Maya Safira"
asal_instansi = "SMAN 1 Jakarta"
hobi_siswa = "Desain & Membaca"
alasan_belajar = "Ingin membuat program otomasi sendiri"

print("=" * 50)
print("              KARTU PROFIL BELAJAR")
print("=" * 50)
print(f"Nama Lengkap  : {nama_profil}")
print(f"Asal Instansi : {asal_instansi}")
print(f"Hobi          : {hobi_siswa}")
print(f"Tujuan Belajar: {alasan_belajar}")
print("=" * 50)
print()


print("=== SOLUSI SOAL 4: Re-assignment Skor Game ===")
skor = 0
print(f"Skor Awal      : {skor}")

skor = 50  # Selesai Level 1
print(f"Skor Level 1   : {skor}")

skor = 120  # Selesai Level 2
print(f"Skor Level 2   : {skor}")
