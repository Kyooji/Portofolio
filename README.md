# Pixel Portfolio — 8-Bit Blue Retro Arcade

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Mengganti isi konten

Semua data ada di `src/data/`, terpisah dari komponen UI:

- `profile.js` — nama, role, bio, stats RPG, email, social links
- `skills.js` — daftar skill + persentase
- `projects.js` — daftar "quest" / project, termasuk link GitHub & demo
- `experience.js` — timeline "mission history"

Ganti nilai di file-file tersebut saja, tidak perlu menyentuh komponen.

## Struktur

```
src/
├── components/   # semua UI reusable
├── data/         # data portofolio (edit di sini)
├── App.jsx       # perakitan halaman + loading screen
├── main.jsx
└── index.css     # CRT scanline, pixel border, palet warna
```

## Catatan

- Form kontak di `Contact.jsx` masih simulasi UI. Ganti bagian `TODO` di `handleSubmit`
  dengan pemanggilan API/form service sungguhan (mis. Formspree, EmailJS, atau backend sendiri).
- Gambar project kosong (`image: ''`) akan menampilkan placeholder pixel. Isi dengan path
  di folder `public/` atau URL gambar untuk menampilkan gambar asli.
- Custom pixel cursor otomatis nonaktif di perangkat sentuh/mobile.
- `prefers-reduced-motion` sudah dihormati secara global di `index.css`.
