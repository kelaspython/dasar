# ==============================================================================
# KUNCI JAWABAN / REFERENSI SOLUSI: Latihan Pertemuan 04
# ==============================================================================

print("=== SOLUSI SOAL 1: Analisis Nilai Kelas ===")
nilai_kelas = [75, 80, 92, 65, 88, 70, 95, 60, 84, 90]

jumlah_siswa = len(nilai_kelas)
nilai_min = min(nilai_kelas)
nilai_max = max(nilai_kelas)
rata_rata = sum(nilai_kelas) / jumlah_siswa

# List comprehension nilai lulus (>= 75)
lulus = [skor for skor in nilai_kelas if skor >= 75]

# Urutan terurut descending
nilai_terurut = sorted(nilai_kelas, reverse=True)

print(f"Jumlah Siswa    : {jumlah_siswa}")
print(f"Nilai Terendah  : {nilai_min}")
print(f"Nilai Tertinggi : {nilai_max}")
print(f"Rata-rata Kelas : {rata_rata:.2f}")
print(f"Siswa Lulus     : {lulus} (Total: {len(lulus)} orang)")
print(f"Urutan Nilai    : {nilai_terurut}\n")


print("=== SOLUSI SOAL 2: Keranjang Belanja Interaktif ===")
keranjang = []

# Kita beri simulasi mini otomatis untuk demonstrasi
menu_input = ["1", "Buku Tulis", "1", "Pensil 2B", "3", "2", "Buku Tulis", "3", "4"]
idx = 0

while True:
    print("\n--- MENU KERANJANG ---")
    print("1. Tambah Barang")
    print("2. Hapus Barang")
    print("3. Lihat Isi Keranjang")
    print("4. Selesai")
    
    # Memakai input terarah atau interaktif
    if idx < len(menu_input):
        pilihan = menu_input[idx]
        idx += 1
        print(f"Pilihan sistem otomatis demo: {pilihan}")
    else:
        pilihan = "4"

    if pilihan == "1":
        barang = menu_input[idx] if idx < len(menu_input) else "Penggaris"
        idx += 1
        keranjang.append(barang)
        print(f"✅ '{barang}' berhasil ditambahkan ke keranjang.")
    elif pilihan == "2":
        barang = menu_input[idx] if idx < len(menu_input) else "Buku Tulis"
        idx += 1
        if barang in keranjang:
            keranjang.remove(barang)
            print(f"🗑️ '{barang}' telah dihapus dari keranjang.")
        else:
            print(f"⚠️ '{barang}' tidak ditemukan di keranjang.")
    elif pilihan == "3":
        print(f"📦 Isi keranjang saat ini ({len(keranjang)} item):")
        for i, item in enumerate(keranjang, start=1):
            print(f"   {i}. {item}")
    elif pilihan == "4":
        print("Selesai belanja. Terima kasih!\n")
        break


print("=== SOLUSI SOAL 3: Data Koordinat Titik 2D ===")
titik_list = [(2, 3), (-1, 5), (4, -2), (0, 0), (7, 8)]

for index, (x, y) in enumerate(titik_list, start=1):
    print(f"Titik ke-{index}: Koordinat (X={x:2d}, Y={y:2d})")

# Ambil kuadran 1 (x > 0 dan y > 0)
kuadran_1 = [(x, y) for x, y in titik_list if x > 0 and y > 0]
print(f"Titik di Kuadran 1: {kuadran_1}")
