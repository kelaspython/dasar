# ==============================================================================
# Pertemuan 01 - Contoh 02: Deklarasi dan Inisialisasi Variabel
# ==============================================================================

# 1. Deklarasi & Inisialisasi
# Di Python, variabel dibuat langsung saat diberi nilai pertama kali dengan tanda '='
nama_siswa = "Rian Hidayat"
usia = 19
asal_kota = "Bandung"

print("Nama Siswa :", nama_siswa)
print("Usia       :", usia)
print("Kota Asal  :", asal_kota)
print()

# 2. Mengubah Nilai Variabel (Re-assignment)
# Variabel bersifat dapat diubah nilainya sewaktu-waktu
skor_game = 100
print("Skor awal :", skor_game)

skor_game = 250  # Nilai diperbarui
print("Skor baru :", skor_game)
print()

# 3. Penugasan Sekaligus (Multiple Assignment)
# Memberikan nilai berbeda ke beberapa variabel dalam satu baris
panjang, lebar, tinggi = 10, 5, 2
print("Ukuran balok (p, l, t):", panjang, lebar, tinggi)

# Memberikan nilai yang sama ke beberapa variabel
skor_a = skor_b = skor_c = 0
print("Skor awal tim:", skor_a, skor_b, skor_c)
print()

# 4. Contoh Penamaan yang VALID (Sesuai PEP 8)
nama_lengkap = "Budi Santoso"  # snake_case (sangat disarankan)
_id_rahasia = 9981             # Boleh diawali garis bawah
total_belanja_2 = 75000        # Boleh ada angka di akhir/tengah

# 5. Catatan Kasus SENSITIF (Case-sensitive)
# Tiga variabel di bawah ini dianggap variabel yang BERBEDA oleh Python:
kota = "Jakarta"
Kota = "Surabaya"
KOTA = "Medan"

print("Variabel kota :", kota)
print("Variabel Kota :", Kota)
print("Variabel KOTA :", KOTA)
