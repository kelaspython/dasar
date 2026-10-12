# ==============================================================================
# Pertemuan 04 - Contoh 01: Dasar List, Indexing, dan Slicing
# ==============================================================================

# Membuat List
daftar_belanja = ["Beras", "Minyak Goreng", "Gula Pasir", "Telur", "Kopi"]
print("Daftar Belanja Lengkap:", daftar_belanja)
print(f"Total item: {len(daftar_belanja)}\n")

# 1. Indexing (Mengakses Elemen Tertentu)
print("--- INDEXING ---")
print("Item pertama (index 0)   :", daftar_belanja[0])
print("Item kedua (index 1)     :", daftar_belanja[1])
print("Item terakhir (index -1) :", daftar_belanja[-1])
print("Item sebelum terakhir (-2):", daftar_belanja[-2])
print()

# 2. Mengubah Nilai Elemen (Mutable)
print("--- MENGUBAH ELEMEN ---")
daftar_belanja[1] = "Minyak Kelapa"  # Mengganti Minyak Goreng
print("Setelah diubah index 1  :", daftar_belanja)
print()

# 3. Slicing: list[start:stop:step]
angka = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
print("List Angka:", angka)
print("--- SLICING ---")
print("Index 2 sampai 5 (sebelum 6) :", angka[2:6])
print("3 elemen pertama             :", angka[:3])
print("Mulai index 5 sampai akhir   :", angka[5:])
print("Melompat setiap 2 elemen     :", angka[::2])
print("Membalik urutan list         :", angka[::-1])
