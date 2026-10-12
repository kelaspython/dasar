# 📝 Soal Latihan: Pertemuan 02

Ujilah kemampuan logika percabangan dan operator Anda dengan menyelesaikan 3 tantangan berikut di `latihan_mandiri.py`.

---

## 📌 Soal 1: Program Diskon Supermarket Bertingkat
Sebuah supermarket memberikan diskon belanja kepada pelanggan dengan ketentuan:
- Belanja $\ge$ Rp 500.000: Diskon 20%
- Belanja $\ge$ Rp 250.000 (tetapi < 500.000): Diskon 10%
- Belanja $\ge$ Rp 100.000 (tetapi < 250.000): Diskon 5%
- Belanja < Rp 100.000: Tidak ada diskon (0%)

**Ketentuan Tambahan:**
Jika pelanggan memiliki kartu member (`is_member == True`), ia mendapatkan **tambahan diskon ekstra 5%** dari total setelah diskon awal!

Buatlah program yang meminta:
1. Total belanja kotor (float/int)
2. Status member (`y`/`t`)
3. Menghitung total diskon dan total bayar akhir yang harus dilunasi.

---

## 📌 Soal 2: Penentu Tahun Kabisat (Leap Year)
Tahun kabisat adalah tahun yang habis dibagi 4, dengan aturan pengecualian:
- Jika tahun habis dibagi 400, maka **Kabisat**.
- Jika tidak habis dibagi 400 tetapi habis dibagi 100, maka **Bukan Kabisat**.
- Jika tidak habis dibagi 100 tetapi habis dibagi 4, maka **Kabisat**.
- Selain itu, **Bukan Kabisat**.

*Contoh uji:*
- 2000 -> Kabisat
- 1900 -> Bukan Kabisat
- 2024 -> Kabisat
- 2026 -> Bukan Kabisat

Buatlah program yang meminta input tahun dan menentukan apakah tahun tersebut adalah tahun kabisat atau bukan!

---

## 📌 Soal 3: Kalkulator Indeks Massa Tubuh (BMI) & Kategori
Rumus BMI:
$$\text{BMI} = \frac{\text{berat badan (kg)}}{(\text{tinggi badan (m)})^2}$$

Kategori WHO:
- $\text{BMI} < 18.5$ : Berat Badan Kurang (Underweight)
- $18.5 \le \text{BMI} < 25.0$ : Normal / Ideal
- $25.0 \le \text{BMI} < 30.0$ : Kelebihan Berat Badan (Overweight)
- $\text{BMI} \ge 30.0$ : Obesitas (Obese)

Minta input berat (kg) dan tinggi (cm - konversi ke meter), lalu tampilkan nilai BMI (2 angka di belakang koma) beserta kategorinya.
