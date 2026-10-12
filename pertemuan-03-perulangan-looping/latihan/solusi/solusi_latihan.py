# ==============================================================================
# KUNCI JAWABAN / REFERENSI SOLUSI: Latihan Pertemuan 03
# ==============================================================================

print("=== SOLUSI SOAL 1: Game Tebak Angka Rahasia ===")
angka_rahasia = 27
max_percobaan = 5
berhasil = False

print("Tebak angka rahasia antara 1 sampai 50!")
for percobaan in range(1, max_percobaan + 1):
    tebakan = int(input(f"Percobaan ke-{percobaan}: Masukkan tebakan Anda: "))
    
    if tebakan == angka_rahasia:
        print(f"🎉 Selamat! Tebakan Anda BENAR pada percobaan ke-{percobaan}!\n")
        berhasil = True
        break
    elif tebakan < angka_rahasia:
        print("💡 Terlalu kecil! Coba angka yang lebih besar.")
    else:
        print("💡 Terlalu besar! Coba angka yang lebih kecil.")

if not berhasil:
    print(f"😢 Kesempatan habis! Angka rahasia yang benar adalah: {angka_rahasia}\n")


print("=== SOLUSI SOAL 2: Deret Fibonacci ===")
n = int(input("Masukkan jumlah suku Fibonacci: "))

if n <= 0:
    print("Masukkan angka lebih besar dari 0.")
elif n == 1:
    print("Deret: 0")
else:
    a, b = 0, 1
    print(f"Deret {n} suku pertama:", end=" ")
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b
    print("\n")


print("=== SOLUSI SOAL 3: Kalkulator Faktorial ===")
num = int(input("Masukkan angka bulat positif (N): "))

if num < 0:
    print("Faktorial tidak terdefinisi untuk bilangan negatif.")
elif num == 0:
    print("0! = 1")
else:
    faktorial = 1
    for i in range(1, num + 1):
        faktorial *= i
    print(f"Hasil {num}! = {faktorial:,}")
