# ==============================================================================
# Pertemuan 01 - Contoh 05: Menyimpan Input Pengguna ke Variabel
# ==============================================================================

print("=== PROGRAM KARTU PENGUNJUNG PERPUSTAKAAN ===")

# Mengambil teks dari pengguna dan menyimpannya ke variabel
nama_anggota = input("Masukkan nama lengkap Anda: ")
nomor_id = input("Masukkan nomor kartu/identitas: ")
instansi = input("Masukkan nama sekolah/kampus: ")

# Menampilkan kembali data yang telah disimpan di variabel
print("\n" + "=" * 45)
print("            KARTU PENGUNJUNG")
print("=" * 45)
print(f"Nama Lengkap : {nama_anggota}")
print(f"No. ID       : {nomor_id}")
print(f"Instansi     : {instansi}")
print("=" * 45)
print("Selamat datang dan selamat membaca buku!")
