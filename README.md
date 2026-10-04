# LensaKita

Dashboard pengelolaan sewa kamera berbasis HTML, CSS, JavaScript, dan Supabase PostgreSQL. Aplikasi berjalan di browser tanpa Node.js, Express, npm, atau framework frontend.

## Struktur aplikasi

```text
index.html
style.css
script.js
SUPABASE/
	app.js
	database.sql
```

## Menjalankan

1. Buka folder proyek ini di VS Code.
2. Klik kanan `index.html`, lalu pilih **Open with Live Server**. Alternatifnya, buka `index.html` langsung di browser untuk mencoba mode demo.
3. Tanpa konfigurasi Supabase, aplikasi memakai data contoh di browser dan menyimpannya di `localStorage`.

## Menghubungkan Supabase

1. Buat project Supabase, lalu buka **SQL Editor**.
2. Jalankan seluruh isi `SUPABASE/database.sql` satu kali untuk membuat tabel, relasi, constraint, dan data contoh.
3. Buka **Project Settings > API**. Salin Project URL dan publishable/anon key.
4. Ganti nilai `SUPABASE_URL` dan `SUPABASE_ANON_KEY` di `SUPABASE/app.js`. Jangan pernah menaruh `service_role` key di aplikasi browser.
5. Muat ulang aplikasi melalui Live Server. Indikator koneksi menampilkan status Supabase.

Pastikan kebijakan akses Supabase (RLS dan policies) sesuai kebutuhan sebelum memakai data nyata. Aplikasi ini tidak menyediakan login atau pembatasan peran.

## Fitur

- Dashboard statistik, transaksi terbaru, kamera yang disewa, dan grafik pendapatan.
- CRUD kamera serta CRUD pelanggan dengan pencarian dan filter.
- Transaksi sewa dengan hitung otomatis durasi dan total tarif.
- Pengembalian kamera yang memperbarui status transaksi dan inventaris.
- Ringkasan pendapatan dengan filter status.
