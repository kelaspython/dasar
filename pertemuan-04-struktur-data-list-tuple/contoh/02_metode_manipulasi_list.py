# ==============================================================================
# Pertemuan 04 - Contoh 02: Metode Manipulasi List
# ==============================================================================

bahasa = ["Python", "JavaScript", "Go"]
print("Awal:", bahasa)

# 1. Menambahkan Elemen
bahasa.append("Rust")               # Menambah di posisi paling akhir
print("Setelah append('Rust')      :", bahasa)

bahasa.insert(1, "TypeScript")      # Menyisipkan di index ke-1
print("Setelah insert(1, 'TS')     :", bahasa)

bahasa.extend(["Java", "Kotlin"])   # Menambahkan list lain ke akhir
print("Setelah extend(...)         :", bahasa)
print()

# 2. Menghapus Elemen
bahasa.remove("JavaScript")         # Menghapus item berdasarkan kecocokan nilai
print("Setelah remove('JS')        :", bahasa)

item_terakhir = bahasa.pop()        # Menghapus elemen paling belakang dan mengembalikannya
print(f"Elemen yang di-pop         : {item_terakhir}")
print("Setelah pop()               :", bahasa)

del bahasa[0]                       # Menghapus berdasarkan index tertentu
print("Setelah del bahasa[0]       :", bahasa)
print()

# 3. Pengurutan & Statistik
nilai_ujian = [88, 72, 95, 60, 85, 91]
print("Nilai Asli                  :", nilai_ujian)

nilai_ujian.sort()                  # Ascending (terkecil ke terbesar)
print("Setelah sort() (Ascending)  :", nilai_ujian)

nilai_ujian.sort(reverse=True)      # Descending (terbesar ke terkecil)
print("Setelah sort(reverse=True)  :", nilai_ujian)

print(f"Nilai Terendah : {min(nilai_ujian)}")
print(f"Nilai Tertinggi: {max(nilai_ujian)}")
print(f"Rata-rata      : {sum(nilai_ujian) / len(nilai_ujian):.2f}")
