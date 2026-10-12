# ==============================================================================
# Pertemuan 02 - Contoh 02: Operator Perbandingan & Logika
# ==============================================================================

x = 10
y = 20

print("--- OPERATOR PERBANDINGAN (Menghasilkan Boolean) ---")
print(f"x == y (sama dengan)       : {x == y}")
print(f"x != y (tidak sama dengan) : {x != y}")
print(f"x > y  (lebih besar)       : {x > y}")
print(f"x < y  (lebih kecil)       : {x < y}")
print(f"x >= 10 (lebih besar/sama) : {x >= 10}")
print(f"y <= 15 (lebih kecil/sama) : {y <= 15}")
print()

print("--- OPERATOR LOGIKA (and, or, not) ---")
usia = 22
punya_ktp = True
punya_sim = False

# 1. Operator AND: Kedua kondisi harus True
bisa_buat_rekening = (usia >= 17) and punya_ktp
print(f"Bisa buka rekening bank?   : {bisa_buat_rekening}")

# 2. Operator OR: Salah satu kondisi cukup True
bisa_sewa_kendaraan = punya_ktp or punya_sim
print(f"Bisa sewa kendaraan?       : {bisa_sewa_kendaraan}")

# 3. Operator NOT: Membalik status kebenaran
sedang_libur = False
harus_masuk_kerja = not sedang_libur
print(f"Harus masuk kerja hari ini?: {harus_masuk_kerja}")
