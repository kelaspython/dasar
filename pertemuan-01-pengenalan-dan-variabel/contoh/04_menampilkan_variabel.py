# ==============================================================================
# Pertemuan 01 - Contoh 04: Cara Menampilkan Variabel & f-string
# ==============================================================================

nama_produk = "Kopi Robusta Lampung"
berat_gram = 250
harga = 45000
stok_tersedia = True

# Cara 1: Menggunakan koma di dalam print()
# Otomatis memberi spasi antar argumen
print("Cara 1 (Koma):")
print("Produk:", nama_produk, "| Berat:", berat_gram, "gram | Harga: Rp", harga)
print()

# Cara 2: Menggunakan parameter sep dan end
print("Cara 2 (sep dan end):")
print("ID", "PRODUK", "HARGA", sep=" --- ")
print("Baris tanpa ganti baris", end=" >>> ")
print("Langsung tersambung di baris yang sama!")
print()

# Cara 3: Menggunakan Modern f-string (SANGAT DIREKOMENDASIKAN)
# Dimulai dengan huruf f di depan tanda petik, dan variabel diletakkan di {variabel}
print("Cara 3 (Modern f-string):")
ringkasan = f"Produk: {nama_produk} ({berat_gram}g) dijual seharga Rp {harga:,}."
print(ringkasan)
print(f"Apakah stok tersedia? {stok_tersedia}")
