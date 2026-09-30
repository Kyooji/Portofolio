# 👾 Hery Sugiharto — Pixel Portfolio (8-Bit Retro Edition)

> *Press START to explore my digital journey, quests, and tech stack.*

Selamat datang di repositori portofolio bertema retro arcade 8-bit milik saya! Portofolio ini dibangun dengan nuansa visual vintage (CRT scanline, pixel art, dan font arcade) untuk memamerkan proyek, riwayat pengalaman, dan skill rekayasa perangkat lunak saya.

---

## 🎮 Character Stats & Profile

- **Class:** Frontend Developer & Full-stack Developer
- **Current Quest:** Computer Science Student @ BINUS University
- **Focus Areas:** Mobile App Development, Scalable Web Backend, UI/UX Prototyping
- **Tech Stack:**
  - **Languages & Frameworks:** JavaScript / TypeScript, Node.js, React Native, Laravel
  - **Databases & Cloud:** PostgreSQL, Microsoft SQL Server, Firebase, MySQL
  - **Tools & Workflow:** Figma, Git/GitHub, Postman, Metabase, DBeaver, Agile/Scrum

---

## 🚀 Menjalankan Proyek Secara Lokal

Jika ingin menjalankan atau meninjau kode tema retro ini di komputer lokal:

```bash
# Clone repository
git clone https://github.com/username/pixel-portfolio.git

# Masuk ke direktori & pasang dependensi
cd pixel-portfolio
npm install

# Jalankan server development
npm run dev

---

## 🛠️ Penyesuaian Konten & Struktur

Data konten dipisahkan dari komponen UI agar mudah diperbarui:

```text
src/
├── components/   # Komponen UI (Retro CRT, scanline, badge 8-bit)
├── data/         # Sumber data portofolio
│   ├── profile.js      # Profil RPG, role, bio, tautan medsos
│   ├── skills.js       # Daftar skill & bar status
│   ├── projects.js     # Kartu quest/proyek & URL repo
│   └── experience.js   # Riwayat quest/misi
├── App.jsx       # Layout utama & loading screen
└── index.css     # Styling CRT scanline & pixel cursor
```

> **Catatan Pengembang:**
> - Form kontak di `Contact.jsx` menggunakan mock handler. Hubungkan ke backend API atau layanan seperti EmailJS/Formspree untuk integrasi produksi.
> - Efek kursor pixel otomatis nonaktif pada perangkat layar sentuh dan menghormati setelan aksesibilitas `prefers-reduced-motion`.

---

## 📬 Hubungi Saya

- **GitHub:** [github.com/username](https://github.com/)
- **LinkedIn:** [linkedin.com/in/username](https://linkedin.com/)
- **Email:** your.email@example.com
