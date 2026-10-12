# ==============================================================================
# Pertemuan 02 - Contoh 01: Operator Aritmatika & Penugasan (Assignment)
# ==============================================================================

a = 17
b = 5

print(f"Nilai a = {a}, Nilai b = {b}\n")

# Operator Aritmatika Standar
print("--- OPERATOR ARITMATIKA ---")
print(f"Penjumlahan (a + b)        : {a + b}")
print(f"Pengurangan (a - b)        : {a - b}")
print(f"Perkalian   (a * b)        : {a * b}")
print(f"Pembagian Riil (a / b)     : {a / b}")      # Menghasilkan float (3.4)
print(f"Pembagian Bulat (a // b)   : {a // b}")     # Dibulatkan ke bawah (3)
print(f"Sisa Bagi / Modulus (a % b): {a % b}")      # Sisa pembagian (2)
print(f"Pangkat / Eksponen (a ** 2): {a ** 2}")     # 17 pangkat 2 = 289
print()

# Operator Penugasan (Shorthand Assignment)
print("--- OPERATOR PENUGASAN ---")
saldo = 100_000
print(f"Saldo awal         : Rp {saldo:,}")

saldo += 50_000   # Ekuivalen dengan saldo = saldo + 50_000
print(f"Setelah setor (+50k): Rp {saldo:,}")

saldo -= 25_000   # Ekuivalen dengan saldo = saldo - 25_000
print(f"Setelah tarik (-25k): Rp {saldo:,}")

saldo *= 2        # Ekuivalen dengan saldo = saldo * 2
print(f"Setelah bonus (*2)  : Rp {saldo:,}")
