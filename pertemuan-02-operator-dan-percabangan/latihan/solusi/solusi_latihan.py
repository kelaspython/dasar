# ==============================================================================
# KUNCI JAWABAN / REFERENSI SOLUSI: Latihan Pertemuan 02
# ==============================================================================

print("=== SOLUSI SOAL 1: Diskon Supermarket Bertingkat ===")
belanja = float(input("Total Belanja: Rp "))
member_input = input("Apakah memiliki kartu member? (y/t): ").strip().lower()
is_member = member_input == "y"

# Tentukan diskon dasar
if belanja >= 500_000:
    persen_diskon = 0.20
elif belanja >= 250_000:
    persen_diskon = 0.10
elif belanja >= 100_000:
    persen_diskon = 0.05
else:
    persen_diskon = 0.0

diskon_utama = belanja * persen_diskon
setelah_diskon_utama = belanja - diskon_utama

# Tambahan diskon member 5% dari sisa tagihan
diskon_member = (setelah_diskon_utama * 0.05) if is_member else 0.0
total_bayar = setelah_diskon_utama - diskon_member

print(f"Diskon Dasar ({int(persen_diskon * 100)}%) : Rp {diskon_utama:,.2f}")
if is_member:
    print(f"Diskon Member (5%)      : Rp {diskon_member:,.2f}")
print(f"Total Yang Harus Dibayar: Rp {total_bayar:,.2f}\n")


print("=== SOLUSI SOAL 2: Penentu Tahun Kabisat ===")
tahun = int(input("Masukkan tahun: "))

# Logika kabisat: (habis dibagi 400) ATAU (habis dibagi 4 DAN TIDAK habis dibagi 100)
if (tahun % 400 == 0) or (tahun % 4 == 0 and tahun % 100 != 0):
    status_kabisat = "adalah TAHUN KABISAT (366 hari)"
else:
    status_kabisat = "BUKAN tahun kabisat (365 hari)"

print(f"Tahun {tahun} {status_kabisat}.\n")


print("=== SOLUSI SOAL 3: Kalkulator Indeks Massa Tubuh (BMI) ===")
berat_kg = float(input("Berat badan (kg): "))
tinggi_cm = float(input("Tinggi badan (cm): "))

# Konversi cm ke meter
tinggi_m = tinggi_cm / 100
bmi = berat_kg / (tinggi_m ** 2)

if bmi < 18.5:
    kategori = "Berat Badan Kurang (Underweight)"
elif bmi < 25.0:
    kategori = "Berat Badan Normal / Ideal"
elif bmi < 30.0:
    kategori = "Kelebihan Berat Badan (Overweight)"
else:
    kategori = "Obesitas (Obese)"

print(f"Skor BMI Anda : {bmi:.2f}")
print(f"Kategori      : {kategori}")
