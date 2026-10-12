# ==============================================================================
# Pertemuan 02 - Contoh 04: Nested IF dan Ternary Operator
# ==============================================================================

# 1. Nested IF (Percabangan Bersarang)
# Kasus: Persyaratan Masuk Wahana Ekstrem
print("=== DEMO NESTED IF: TIKET WAHANA EKSTREM ===")
usia = int(input("Masukkan usia pengunjung: "))
tinggi = int(input("Masukkan tinggi badan (cm): "))

if usia >= 12:
    if tinggi >= 140:
        print("✅ Selamat! Anda diizinkan menaiki wahana Halilintar.")
    else:
        print("❌ Maaf, usia mencukupi tetapi tinggi badan minimal 140 cm.")
else:
    print("❌ Maaf, usia minimal untuk wahana ini adalah 12 tahun.")

print()

# 2. Ternary Operator (Kondisional Satu Baris)
# Sintaks: nilai_true if kondisi else nilai_false
print("=== DEMO TERNARY OPERATOR ===")
skor_toefl = 520
status_kelulusan = "LOLOS SELEKSI" if skor_toefl >= 500 else "BELUM LOLOS"
print(f"Skor TOEFL: {skor_toefl} -> Status: {status_kelulusan}")

angka = 14
jenis = "GENAP" if (angka % 2 == 0) else "GANJIL"
print(f"Angka {angka} tergolong bilangan {jenis}")
