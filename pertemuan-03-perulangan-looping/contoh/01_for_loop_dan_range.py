# ==============================================================================
# Pertemuan 03 - Contoh 01: Perulangan for dan Fungsi range()
# ==============================================================================

# 1. range dengan satu parameter: range(stop) -> default start=0, step=1
print("--- range(5) ---")
for i in range(5):
    print(f"Iterasi ke-{i}")
print()

# 2. range dengan dua parameter: range(start, stop)
print("--- range(1, 6) ---")
for i in range(1, 6):
    print(f"Angka: {i}", end=" | ")
print("\n")

# 3. range dengan tiga parameter: range(start, stop, step)
print("--- range(10, 30, 5) --- (Melompat setiap 5 angka)")
for i in range(10, 30, 5):
    print(f"Nilai: {i}", end=" | ")
print("\n")

# 4. range mundur / countdown: step negatif
print("--- Hitung Mundur Roket: range(5, 0, -1) ---")
for i in range(5, 0, -1):
    print(f"Hitungan mundur: {i}...")
print("🚀 Meluncur!\n")

# 5. Iterasi langsung pada elemen String
teks = "KODING"
print(f"Mengeja kata '{teks}':")
for huruf in teks:
    print(f"-> {huruf}")
