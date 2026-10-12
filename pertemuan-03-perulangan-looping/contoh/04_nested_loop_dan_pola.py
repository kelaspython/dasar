# ==============================================================================
# Pertemuan 03 - Contoh 04: Nested Loop dan Pembentukan Pola
# ==============================================================================

# 1. Tabel Perkalian Sederhana (Matrix 5x5)
print("=== TABEL PERKALIAN 1 SAMPAI 5 ===")
for baris in range(1, 6):
    for kolom in range(1, 6):
        hasil = baris * kolom
        # :4d membuat output rata kanan selebar 4 karakter
        print(f"{hasil:4d}", end="")
    print()  # Ganti baris setiap kali loop kolom selesai
print()

# 2. Pola Segitiga Siku-Siku Bintang
print("=== POLA SEGITIGA SIKU-SIKU ===")
tinggi = 5
for i in range(1, tinggi + 1):
    print("*" * i)
print()

# 3. Pola Segitiga Terbalik
print("=== POLA SEGITIGA TERBALIK ===")
for i in range(tinggi, 0, -1):
    print("*" * i)
print()

# 4. Pola Piramida Terpusat
print("=== POLA PIRAMIDA BINTANG ===")
for i in range(1, tinggi + 1):
    spasi = " " * (tinggi - i)
    bintang = "*" * (2 * i - 1)
    print(spasi + bintang)
