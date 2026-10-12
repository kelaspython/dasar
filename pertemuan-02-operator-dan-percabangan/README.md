# Pertemuan 02: Operator & Logika Percabangan (Control Flow)

Pada modul pertemuan kedua ini, kita akan mempelajari cara membuat program yang cerdas dan mampu mengambil keputusan berdasarkan berbagai kondisi logis.

---

## 🎯 Tujuan Pembelajaran
1. Memahami operator aritmatika lanjut (`%`, `//`, `**`) dan operator penugasan (`+=`, `-=`, dll).
2. Menggunakan operator relasional / perbandingan (`==`, `!=`, `<`, `>`, `<=`, `>=`).
3. Memadukan kondisi logika majemuk menggunakan `and`, `or`, dan `not`.
4. Menguasai alur kontrol percabangan `if`, `elif`, dan `else`.
5. Menerapkan kondisi bersarang (*nested if*) dan ekspresi kondisional (*ternary operator*).

---

## 📂 Struktur Modul

```
pertemuan-02-operator-dan-percabangan/
├── slides.md
├── README.md
├── contoh/
│   ├── 01_operator_aritmatika_penugasan.py
│   ├── 02_operator_perbandingan_logika.py
│   ├── 03_percabangan_if_elif_else.py
│   └── 04_nested_if_ternary.py
└── latihan/
    ├── soal_latihan.md
    ├── latihan_mandiri.py
    └── solusi/
        └── solusi_latihan.py
```

---

## 🚀 Menjalankan Slide

```bash
npm run dev:p02
```
Slide akan terbuka secara live di browser Anda.

---

## 📌 Ringkasan Sintaks Kunci

### 1. Struktur `if-elif-else`
```python
if kondisi_1:
    # dijalankan jika kondisi_1 True
elif kondisi_2:
    # dijalankan jika kondisi_2 True
else:
    # dijalankan jika semua kondisi sebelumnya False
```

### 2. Operator Logika
- `and`: Bernilai `True` jika kedua sisi `True`.
- `or`: Bernilai `True` jika salah satu sisi bernilai `True`.
- `not`: Membalik nilai kebenaran.
