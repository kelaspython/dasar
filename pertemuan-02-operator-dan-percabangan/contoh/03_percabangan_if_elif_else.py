# ==============================================================================
# Pertemuan 02 - Contoh 03: Percabangan Kondisional if, elif, else
# ==============================================================================

# Studi Kasus: Penentuan Kategori Nilai Ujian
nama_mahasiswa = "Bambang Pamungkas"
nilai_akhir = 78.5

print(f"Mahasiswa   : {nama_mahasiswa}")
print(f"Nilai Akhir : {nilai_akhir}")

if nilai_akhir >= 85:
    grade = "A"
    keterangan = "Istimewa (Sangat Memuaskan)"
elif nilai_akhir >= 75:
    grade = "B"
    keterangan = "Baik"
elif nilai_akhir >= 60:
    grade = "C"
    keterangan = "Cukup"
elif nilai_akhir >= 45:
    grade = "D"
    keterangan = "Kurang"
else:
    grade = "E"
    keterangan = "Gagal (Wajib Mengulang)"

print(f"Grade       : {grade}")
print(f"Keterangan  : {keterangan}")
print()

# Memeriksa bilangan Positif, Negatif, atau Nol
bilangan = int(input("Masukkan sebuah angka bulat: "))

if bilangan > 0:
    print(f"Angka {bilangan} adalah bilangan POSITIF.")
elif bilangan < 0:
    print(f"Angka {bilangan} adalah bilangan NEGATIF.")
else:
    print("Angka yang dimasukkan adalah NOL.")
