# ==============================================================================
# Pertemuan 04 - Contoh 03: List Comprehension
# ==============================================================================

# 1. Transformasi Sederhana: Menghitung Kuadrat Angka 1-10
# Cara biasa:
kuadrat_biasa = []
for i in range(1, 11):
    kuadrat_biasa.append(i ** 2)

# Menggunakan List Comprehension:
kuadrat_comp = [i ** 2 for i in range(1, 11)]

print("Hasil Biasa :", kuadrat_biasa)
print("Hasil Comp  :", kuadrat_comp)
print()

# 2. Filter dengan Kondisi 'if': Mengambil bilangan genap saja
bilangan = [12, 17, 24, 33, 40, 55, 68, 71, 80]
hanya_genap = [x for x in bilangan if x % 2 == 0]
print("Semua Angka :", bilangan)
print("Hanya Genap :", hanya_genap)
print()

# 3. Transformasi Teks
daftar_nama = ["budi", "siti", "ahmad", "dewi"]
nama_kapital = [nama.title() for nama in daftar_nama]
print("Nama Asli   :", daftar_nama)
print("Nama Format :", nama_kapital)
print()

# 4. Kondisi if-else dalam List Comprehension
# [hasil_true if kondisi else hasil_false for item in koleksi]
label_angka = ["GENAP" if x % 2 == 0 else "GANJIL" for x in range(1, 8)]
print("Label Ganjil/Genap:", label_angka)
