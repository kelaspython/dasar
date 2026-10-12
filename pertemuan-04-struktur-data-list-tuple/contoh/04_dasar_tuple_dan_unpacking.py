# ==============================================================================
# Pertemuan 04 - Contoh 04: Dasar Tuple dan Unpacking
# ==============================================================================

# 1. Deklarasi Tuple (Menggunakan Tanda Kurung Biasa)
resolusi_layar = (1920, 1080)
warna_rgb = (255, 99, 71)

print("Resolusi:", resolusi_layar)
print("Tipe    :", type(resolusi_layar))
print("Lebar   :", resolusi_layar[0])
print("Tinggi  :", resolusi_layar[1])
print()

# 2. Sifat Kekekalan (Immutability)
# Menghapus komentar baris di bawah ini akan memicu TypeError:
# resolusi_layar[0] = 2560  # Error! Tuple tidak dapat diubah isinya.

# 3. Tuple Unpacking
siswa = ("Ahmad Fauzi", 20, "Teknik Informatika")
nama, usia, jurusan = siswa

print("--- HASIL UNPACKING TUPLE ---")
print(f"Nama    : {nama}")
print(f"Usia    : {usia} tahun")
print(f"Jurusan : {jurusan}\n")

# 4. Pertukaran Variabel (Swapping) dengan Sintaks Tuple Python
x = "Kopi"
y = "Teh"
print(f"Sebelum Swap: x = {x}, y = {y}")

# Tukar posisi
x, y = y, x
print(f"Setelah Swap: x = {x}, y = {y}")
