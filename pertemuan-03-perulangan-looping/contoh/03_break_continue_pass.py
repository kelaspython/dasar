# ==============================================================================
# Pertemuan 03 - Contoh 03: Kata Kunci break, continue, dan pass
# ==============================================================================

# 1. CONTINUE: Melewatkan iterasi tertentu
print("--- DEMO CONTINUE: Melewatkan angka kelipatan 3 ---")
for i in range(1, 16):
    if i % 3 == 0:
        continue  # Lewatkan sisa baris kode di bawahnya, langsung ke angka berikutnya
    print(i, end=" ")
print("\n")

# 2. BREAK: Menghentikan perulangan di tengah jalan
print("--- DEMO BREAK: Mencari angka kelipatan 7 pertama di atas 50 ---")
for num in range(51, 100):
    if num % 7 == 0:
        print(f"Ketemu! Angka pertama adalah: {num}")
        break  # Loop langsung berhenti total
print()

# 3. PASS: Placeholder sintaks agar kode tidak error saat proses pengembangan
print("--- DEMO PASS ---")
for x in range(3):
    if x == 1:
        pass  # TODO: Logika penanganan khusus akan ditulis nanti
    else:
        print(f"Eksekusi angka: {x}")
