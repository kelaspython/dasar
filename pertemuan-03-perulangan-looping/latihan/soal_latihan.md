# 📝 Soal Latihan: Pertemuan 03

Kerjakan soal-soal latihan berikut pada file `latihan_mandiri.py` untuk menguji pemahaman perulangan.

---

## 📌 Soal 1: Game Tebak Angka Rahasia (1 - 50)
Buatlah sebuah game mini tebak angka:
1. Tentukan sebuah angka rahasia (misal `angka_rahasia = 27`).
2. Berikan pemain kesempatan maksimal **5 kali tebakan**.
3. Di setiap tebakan:
   - Jika tebakan **sama** dengan angka rahasia: Berikan ucapan selamat, tampilkan berapa kali tebakan yang dihabiskan, dan akhiri permainan (`break`).
   - Jika tebakan **lebih kecil**: Beri petunjuk *"Terlalu kecil! Coba angka lebih besar."*
   - Jika tebakan **lebih besar**: Beri petunjuk *"Terlalu besar! Coba angka lebih kecil."*
4. Jika kesempatan habis dan pemain belum berhasil menebak, tampilkan pesan kekalahan beserta angka rahasia yang sebenarnya.

---

## 📌 Soal 2: Deret Bilangan Fibonacci
Deret Fibonacci adalah deret yang suku berikutnya merupakan penjumlahan 2 suku sebelumnya:
`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...`

Buatlah program yang meminta input $N$ (jumlah suku), lalu mencetak deret Fibonacci hingga suku ke-$N$ dalam satu baris.

---

## 📌 Soal 3: Kalkulator Faktorial ($N!$)
Faktorial dari bilangan bulat positif $N$ adalah perkalian semua bilangan bulat positif dari 1 sampai $N$:
$$N! = 1 \times 2 \times 3 \times \dots \times N$$
Contoh: $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$.

Minta input $N$ dari pengguna, hitung nilai faktorialnya menggunakan loop, dan tampilkan hasilnya.
