# ==============================================================================
# Pertemuan 03 - Contoh 02: Perulangan while dan Logika Kondisional
# ==============================================================================

# 1. While Loop Standar dengan Penghitung (Counter)
counter = 1
print("--- While Loop Sederhana 1 s/d 5 ---")
while counter <= 5:
    print(f"Langkah ke-{counter}")
    counter += 1  # Wajib mengubah nilai variabel kondisi agar tidak terjadi infinite loop
print()

# 2. Akumulasi Total Nilai dengan While
total = 0
angka = 1
while angka <= 10:
    total += angka
    angka += 1

print(f"Total penjumlahan 1 sampai 10 = {total}\n")

# 3. Simulasi Input Interaktif (Batas Percobaan)
pin_benar = "1234"
kesempatan = 3

print("--- SIMULASI LOGIN DENGAN BATAS KESEMPATAN ---")
while kesempatan > 0:
    pin_input = input(f"Masukkan PIN Anda (Sisa kesempatan {kesempatan}): ")
    if pin_input == pin_benar:
        print("✅ PIN Benar! Akses berhasil diberikan.")
        break
    else:
        kesempatan -= 1
        print("❌ PIN Salah!")

if kesempatan == 0:
    print("⛔ Kartu Anda terblokir karena 3 kali salah memasukkan PIN.")
