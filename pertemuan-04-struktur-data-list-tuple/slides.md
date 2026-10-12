---
theme: default
background: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
title: Pertemuan 04 - Struktur Data List & Tuple
mdc: true
---

# 🐍 Pemrograman Python Dasar
## Pertemuan 04: Struktur Data (List & Tuple)

Menyimpan Koleksi Banyak Data Berurutan, Manipulasi Array Dinamis, dan Konsep Immutability

<div class="pt-12">
  <span class="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm border border-emerald-500/40">
    Pertemuan 04 • Sequential Data Structures
  </span>
</div>

---
layout: default
---

# 🎯 Agenda Pertemuan 04

- **1. Konsep Struktur Data Koleksi**: Mengapa satu variabel saja tidak cukup?
- **2. Karakteristik List**: Ordered, Mutable (bisa diubah), mengizinkan duplikat
- **3. Indexing & Slicing**: Mengambil elemen tertentu dan rentang data
- **4. Metode Bawaan List**: `append()`, `insert()`, `remove()`, `pop()`, `sort()`, `reverse()`
- **5. List Comprehension**: Sintaks elegan membuat list baru dalam satu baris
- **6. Tuple & Immutability**: Kapan harus menggunakan Tuple daripada List?
- **7. Tuple Packing & Unpacking**: Teknik praktis pertukaran data (*swap*)

---
layout: two-cols
---

# 📋 Indexing & Slicing pada List

::left::
### Indexing (Positif & Negatif)
Index Python dimulai dari **0**, dan index negatif dimulai dari **-1** (dari elemen paling belakang).

```python
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
# Index:    0        1         2         3
# Negatif: -4       -3        -2        -1

print(buah[0])   # Apel
print(buah[-1])  # Pisang
```

::right::
### Slicing: `list[start:stop:step]`
```python
angka = [10, 20, 30, 40, 50, 60]

# Ambil index 1 sampai sebelum index 4
print(angka[1:4])   # [20, 30, 40]

# Dari awal sampai index 3
print(angka[:3])    # [10, 20, 30]

# Dari index 3 sampai akhir
print(angka[3:])    # [40, 50, 60]

# Membalik list dengan step -1
print(angka[::-1])  # [60, 50, 40, 30, 20, 10]
```

---
layout: default
---

# 🛠️ Metode Manipulasi List (Mutable)

List bersifat **mutable** — isinya bisa ditambah, diubah, maupun dihapus kapan saja.

```python
hobi = ["Membaca", "Gaming"]

# Menambah elemen
hobi.append("Ngoding")            # Tambah di akhir -> ['Membaca', 'Gaming', 'Ngoding']
hobi.insert(1, "Berenang")        # Sisipkan di index 1

# Menghapus elemen
hobi.remove("Gaming")             # Hapus berdasarkan nilai
terakhir = hobi.pop()             # Hapus elemen terakhir dan kembalikan nilainya

# Pengurutan
skor = [85, 92, 78, 90, 65]
skor.sort()                       # Mengurutkan dari kecil ke besar (in-place)
skor.sort(reverse=True)           # Mengurutkan dari besar ke kecil
```

<div class="mt-4 p-3 rounded bg-blue-500/10 border border-blue-500/30 text-sm">
💡 <b>Fungsi Berguna</b>: <code>len(skor)</code> untuk jumlah item, <code>min(skor)</code> untuk nilai terendah, <code>max(skor)</code> untuk nilai tertinggi, <code>sum(skor)</code> untuk jumlah total.
</div>

---
layout: two-cols
---

# ✨ List Comprehension

::left::
Cara ringkas dan *Pythonic* untuk memfilter dan memetakan list.

### Gaya Konvensional
```python
angka = [1, 2, 3, 4, 5, 6]
kuadrat_genap = []

for x in angka:
    if x % 2 == 0:
        kuadrat_genap.append(x ** 2)

print(kuadrat_genap) # [4, 16, 36]
```

::right::
### Gaya List Comprehension
```python
# Sintaks:
# [ekspresi for item in koleksi if kondisi]

angka = [1, 2, 3, 4, 5, 6]
kuadrat_genap = [x ** 2 for x in angka if x % 2 == 0]

print(kuadrat_genap) # [4, 16, 36]
```

Sintaks lebih bersih, terbaca, dan memiliki performa eksekusi lebih cepat!

---
layout: two-cols
---

# 🔒 Tuple & Unpacking

::left::
### Mengapa Butuh Tuple?
Tuple didefinisikan dengan tanda kurung `(...)` dan bersifat **Immutable** (tidak dapat diubah setelah dibuat).

```python
koordinat = (106.8456, -6.2088)
# koordinat[0] = 100.0  
# ❌ TypeError: 'tuple' object does not support item assignment
```

**Kapan menggunakan Tuple?**
- Data konstan yang tidak boleh dimodifikasi (misal: koordinat GPS, konfigurasi sistem).
- Lebih hemat memori dibanding List.

::right::
### Unpacking & Swapping Nilai
```python
# Unpacking Tuple
point = (10, 25)
x, y = point
print(f"X: {x}, Y: {y}")

# Menukar nilai tanpa variabel sementara!
a = 100
b = 200
a, b = b, a
print(f"a = {a}, b = {b}") # a=200, b=100
```

---
layout: default
---

# 📚 Latihan Praktikum Pertemuan 04

Buka folder `pertemuan-04-struktur-data-list-tuple/`:

1. **Eksplorasi Contoh Kode**:
   - `01_dasar_list_indexing_slicing.py`
   - `02_metode_manipulasi_list.py`
   - `03_list_comprehension.py`
   - `04_dasar_tuple_dan_unpacking.py`
2. **Tantangan Kasus Latihan**:
   - Sistem Buku Catatan Nilai Kelas (hitung mean, nilai tertinggi, siswa di atas rata-rata)
   - Filter duplikasi data absensi
   - Keranjang belanja dinamis
