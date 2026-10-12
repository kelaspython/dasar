---
theme: default
background: https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1920&q=80
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
title: Pertemuan 03 - Perulangan (Looping) di Python
mdc: true
---

# 🐍 Pemrograman Python Dasar
## Pertemuan 03: Perulangan (Looping)

Otomatisasi Tugas Berulang Menggunakan `for` Loop, `while` Loop, dan Kontrol Alur

<div class="pt-12">
  <span class="px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-300 text-sm border border-violet-500/40">
    Pertemuan 03 • Iteration & Loops
  </span>
</div>

---
layout: default
---

# 🎯 Agenda Pertemuan 03

- **1. Konsep Perulangan**: Mengapa dan kapan kita butuh loop?
- **2. `for` Loop & Fungsi `range()`**: Mengulang sejumlah langkah yang diketahui
- **3. `while` Loop**: Mengulang selama suatu kondisi tetap bernilai `True`
- **4. Kata Kunci Pengendali**:
  - `break` : Menghentikan paksa loop
  - `continue` : Melewatkan iterasi saat ini ke iterasi berikutnya
  - `pass` : Placeholder tanpa aksi
- **5. Nested Loop**: Loop di dalam loop & membuat pola bintang / tabel perkalian
- **6. Praktikum**: Game tebak angka rahasia interaktif

---
layout: two-cols
---

# 🔁 `for` Loop & Fungsi `range()`

::left::
### Pola Fungsi `range()`
`range(start, stop, step)`:
- `start` *(opsional)*: Angka awal (default: 0)
- `stop` *(wajib)*: Berhenti **sebelum** nilai ini
- `step` *(opsional)*: Kelipatan kenaikan (default: 1)

```python
# 0, 1, 2, 3, 4
for i in range(5):
    print(i)

# 1, 3, 5, 7, 9 (lompat 2)
for i in range(1, 10, 2):
    print(i)
```

::right::
### Iterasi pada Teks / Karakter
```python
kata = "PYTHON"
for huruf in kata:
    print(f"Huruf: {huruf}")
```

### Menghitung Total Akumulasi
```python
total = 0
for angka in range(1, 101):
    total += angka
print(f"Total 1 s/d 100: {total}") # 5050
```

---
layout: two-cols
---

# 🔄 `while` Loop

::left::
`while` digunakan ketika **jumlah iterasi tidak diketahui di awal**, melainkan bergantung pada pemenuhan suatu kondisi dinamis.

```python
hitungan = 1
while hitungan <= 5:
    print(f"Hitungan ke-{hitungan}")
    hitungan += 1 # Wajib ada updater!
```

> ⚠️ **Hati-hati Infinite Loop!**
> Jika kondisi tidak pernah bernilai `False` (misal lupa menambah nilai variabel penghitung), loop akan berjalan selamanya dan menghabiskan memori!

::right::
### Contoh Menu Interaktif
```python
pilihan = ""
while pilihan != "keluar":
    pilihan = input("Ketik 'keluar' untuk selesai: ")
    print(f"Anda mengetik: {pilihan}")

print("Program selesai dengan aman.")
```

---
layout: default
---

# 🛑 Kontrol Loop: `break`, `continue`, `pass`

| Perintah | Deskripsi | Efek Terhadap Perulangan |
|---|---|---|
| **`break`** | Berhenti Seketika | Menghentikan loop secara paksa dan keluar dari blok loop |
| **`continue`** | Lewati Langkah | Melewatkan sisa baris kode saat ini dan lanjut ke iterasi berikutnya |
| **`pass`** | Placeholder Kosong | Tidak melakukan apapun (agar sintaks tidak error saat masih drafting) |

```python
print("--- Contoh Continue (Hanya Cetak Ganjil) ---")
for i in range(1, 10):
    if i % 2 == 0:
        continue # Lewati jika genap
    print(i, end=" ") # 1 3 5 7 9

print("\n\n--- Contoh Break (Berhenti saat ketemu 7) ---")
for i in range(1, 20):
    if i == 7:
        print(f"Ketemu angka {i}! Hentikan loop.")
        break
    print(i, end=" ") # 1 2 3 4 5 6
```

---
layout: two-cols
---

# 🧱 Nested Loop (Perulangan Bersarang)

::left::
### Tabel Perkalian (1 s/d 5)
```python
for baris in range(1, 6):
    for kolom in range(1, 6):
        hasil = baris * kolom
        print(f"{hasil:3}", end=" ")
    print() # Ganti baris baru
```

Output:
```
  1   2   3   4   5 
  2   4   6   8  10 
  3   6   9  12  15 
  4   8  12  16  20 
  5  10  15  20  25 
```

::right::
### Pola Segitiga Bintang
```python
tinggi = 5
for i in range(1, tinggi + 1):
    print("*" * i)
```

Output:
```
*
**
***
****
*****
```

---
layout: default
---

# 🎮 Mini Project Sesi Ini: Game Tebak Angka

Buka `pertemuan-03-perulangan-looping/`:

1. **Eksplorasi Modul**:
   - `01_for_loop_dan_range.py`
   - `02_while_loop.py`
   - `03_break_continue_pass.py`
   - `04_nested_loop_dan_pola.py`
2. **Praktikum Mandiri**:
   - Program game tebak angka acak rahasia dengan batas 5 kali kesempatan
   - Validasi input PIN ATM menggunakan batas percobaan
   - Deret Fibonacci sederhana
3. Cek panduan pengerjaan di `latihan/soal_latihan.md`!
