# Café Arcadia - Audit & Explanation Guide

## 🎯 Ringkasan Project

**Café Arcadia** adalah website coffee shop dengan tema **medieval fantasy RPG**. Project ini dibangun menggunakan **Next.js 14** dengan TypeScript, Tailwind CSS, dan Framer Motion.

---

## 🛠️ Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| Next.js | 14.2.35 | Framework React dengan App Router |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^3.4.1 | Styling utility-first |
| Framer Motion | ^12.34.3 | Animasi & transisi |
| Lucide React | ^0.577.0 | Icon library |
| Google Generative AI | ^0.24.1 | Gemini API untuk Oracle Quiz |

---

## 🏗️ Arsitektur Folder

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (Hero, Menu, Testimonials)
│   ├── layout.tsx         # Root layout dengan metadata
│   ├── globals.css        # CSS global + theme system
│   ├── codex/             # Katalog produk kopi
│   ├── oracle/            # Quiz AI untuk rekomendasi brew
│   ├── alchemist/         # Custom drink builder
│   ├── cartography/       # Peta interaktif origin kopi
│   └── checkout/          # Flow checkout 3 langkah
├── components/
│   ├── Navbar.tsx         # Navigasi dengan cart & theme toggle
│   ├── Footer.tsx         # Footer
│   ├── CartSidebar.tsx    # Shopping cart sidebar
│   ├── CursorGlow.tsx     # Efek cursor custom
│   ├── PageTransition.tsx # Animasi transisi halaman
│   ├── ScrollAnimation.tsx # Animasi scroll reveal
│   ├── alkemis/           # Komponen drink customizer
│   ├── cartography/       # Komponen peta SVG
│   ├── checkout/          # Komponen checkout flow
│   ├── codex/             # Komponen katalog
│   └── oracle/            # Komponen quiz AI
├── context/
│   ├── CartContext.tsx    # State management cart
│   └── ThemeContext.tsx   # Dark/Light mode
└── lib/
    ├── brewNameGenerator.ts    # Generator nama brew fantasy
    └── cartographyData.ts      # Data region peta (7 kerajaan kopi)
```

---

## 📄 Halaman & Fitur

### 1. Homepage (`/`)
- **Hero Section**: "Brewed for Legends" dengan parallax effect
- **The Armory**: 3 produk utama (Dragon's Breath, Golden Knight, Mystic's Essence)
- **Guild Menu**: Menu bertema fantasi (Potions of Awakening, Elixirs, Cold Brews)
- **Testimonials**: Review dari karakter fiksi (Sir Galahad, Merlin, Lady Eleanor)
- **Newsletter**: "Join the Inner Circle"

### 2. The Codex (`/codex`)
- Katalog lengkap semua produk kopi
- Filter berdasarkan roast level (Light, Medium, Dark, Dragon-Fire)
- Card produk dengan animasi hover

### 3. The Oracle (`/oracle`) ⭐ **Fitur AI**
- Quiz interaktif 5 pertanyaan untuk menentukan brew yang cocok
- Integrasi dengan **Gemini 2.5 Flash API**
- Hasil berupa "prophecy" dalam gaya fantasy
- Brews: Dragon's Breath, Golden Knight, Mystic's Essence, Elven Morning Mist, Healer's Matcha

### 4. The Alchemist (`/alchemist`)
- Custom drink builder 3 langkah:
  1. **Base**: Espresso / Cold Brew / Potion Water
  2. **Essence**: Dragon Breath, Elven Vanilla, Shadow Mint, dll
  3. **Vessel**: Chalice / Wooden Mug / Travel Flask
- Sistem harga dinamis
- Generator nama brew fantasy (contoh: "The Cursed Flame of the Chalice")

### 5. The Realms (`/cartography`)
- Peta SVG interaktif dunia fantasy
- 7 kerajaan mewakili origin kopi nyata:
  - Kefa Highlands (Ethiopia) → Dragon's Breath
  - Cloud Kingdoms (Colombia) → Golden Knight
  - Ember Isles (Indonesia) → Mystic's Essence
  - Verdant Plateau (Brazil) → Elven Morning Mist
  - Silver Coast (Guatemala) → Void Essence
  - Jade Mountains (Yemen) → Elf's Morning
  - Crimson Steppes (Kenya) → Cloud Walker
- Zoom & pan dengan Framer Motion
- Chronicle panel dengan lore detail

### 6. Checkout (`/checkout`)
- Flow 3 langkah: Order → Delivery → Dispatch
- UI dengan tema "Merchant's Desk"
- Order confirmation dengan seal animasi

---

## 🎨 Design System

### Warna
- **Primary Gold**: `#C6A87C`
- **Background Dark**: `#120F0D`
- **Text Light**: `#EAE0D5`
- **Accent Red**: `#8b0000` (untuk highlight)

### Typography
- **Cinzel**: Display/heading (medieval serif)
- **Playfair Display**: Body text italic
- **Lato**: Body text regular

### Tema
- Dark mode (default)
- Light mode tersedia via toggle

---

## 🔧 State Management

### CartContext
- `items`: Array produk di cart
- `addItem`, `removeItem`, `updateQuantity`: Mutasi
- `totalItems`, `totalPrice`: Computed values
- `isOpen`, `toggleCart`, `closeCart`: UI state sidebar

### ThemeContext
- `theme`: "dark" | "light"
- `toggleTheme`: Switch tema
- Persisted via localStorage

---

## 🌐 API Integration

### Gemini AI (Oracle)
- Model: `gemini-2.5-flash`
- System prompt: Oracle fantasy persona
- Temperature: 1.5 (high creativity)
- Env variable: `NEXT_PUBLIC_GEMINI_API_KEY`

---

## 💡 Cara Menjelaskan Project

### Elevator Pitch (30 detik)
> "Café Arcadia adalah website coffee shop dengan twist — semua UI dibuat dengan tema medieval fantasy. User bisa explore katalog produk, menggunakan AI Oracle untuk mendapat rekomendasi personal, membuat custom drink di Alchemist's Table, dan melihat origin kopi melalui peta interaktif fantasy world."

### Technical Overview (2 menit)
> "Dibangun dengan Next.js 14 App Router, full TypeScript untuk type safety. Styling pakai Tailwind dengan design system custom (warna gold-brown, typography Cinzel). Animasi menggunakan Framer Motion untuk scroll reveal, page transitions, dan interactive map. Ada integrasi Gemini AI untuk fitur quiz yang generate prophecy unik setiap kali. State management pakai React Context untuk cart dan theme."

### Demo Flow
1. Mulai dari Homepage → jelaskan tema & UI
2. Buka Codex → tunjukkan filter & katalog
3. Pergi ke Oracle → demonstrate AI quiz
4. Tunjukkan Alchemist → custom drink builder
5. Explore Cartography → peta interaktif
6. Add to cart → checkout flow

---

## 📊 Metrics & Highlights

- **7 halaman** utama
- **7 region** di interactive map
- **5 brew types** untuk AI recommendation
- **3-step** custom drink builder
- **Dark/Light** theme support
- **Full responsive** mobile design
- **No external CSS framework** selain Tailwind

---

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Setup environment variable
# Buat file .env.local dengan:
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# Run development server
npm run dev

# Build production
npm run build
```

---

## 🎤 Script Natural untuk Presentasi

### Opening (Pembukaan)
> "Jadi project ini namanya Café Arcadia. Konsepnya adalah website coffee shop, tapi dengan twist yang unik — semua desain dan copywriting-nya menggunakan tema medieval fantasy, seperti game RPG. Jadi bukan cuma 'menu' biasa, tapi 'Guild Menu'. Bukan 'katalog', tapi 'The Codex'. Harga pakai 'Gold Pieces' bukan rupiah."

### Menjelaskan Kenapa Tema Ini
> "Kenapa fantasy? Karena saya ingin menunjukkan bahwa website e-commerce tidak harus membosankan. Dengan tema yang kuat, user experience jadi lebih memorable. Orang yang visit website ini akan ingat, karena berbeda dari coffee shop website pada umumnya."

### Menjelaskan Tech Stack
> "Secara teknis, saya pakai Next.js 14 dengan App Router — ini framework React paling modern saat ini. TypeScript untuk type safety supaya code lebih maintainable. Styling pakai Tailwind CSS karena cepat dan konsisten. Dan untuk animasi, saya pakai Framer Motion — library yang powerful untuk React animations."

### Menjelaskan Fitur AI (Oracle)
> "Fitur paling menarik menurut saya adalah The Oracle. Ini quiz interaktif yang pakai AI — specifically Gemini 2.5 Flash dari Google. User jawab 5 pertanyaan tentang preferensi mereka, lalu AI akan generate 'prophecy' yang memprediksi brew mana yang cocok. Setiap hasil itu unik karena saya set temperature tinggi supaya AI lebih kreatif."

### Menjelaskan Alchemist (Custom Drink Builder)
> "Ada juga The Alchemist — ini fitur untuk bikin custom drink. User pilih base dulu, misalnya espresso atau cold brew. Lalu pilih essence — ini kayak flavor tambahan seperti vanilla atau caramel, tapi dengan nama fantasy seperti 'Elven Vanilla' atau 'Dragon Breath'. Terakhir pilih vessel, yaitu wadah minumannya. Dan sistem akan auto-generate nama fantasy untuk drink mereka, contohnya 'The Cursed Flame of the Chalice'."

### Menjelaskan Cartography (Interactive Map)
> "Lalu ada The Realms — ini peta interaktif yang saya buat pakai SVG. Setiap region di peta mewakili origin kopi yang nyata. Ethiopia jadi 'Kefa Highlands', Colombia jadi 'Cloud Kingdoms', Indonesia jadi 'Ember Isles'. Kalau user click region, akan muncul lore lengkap tentang karakteristik kopi dari daerah itu. Peta ini bisa zoom dan pan, semua animated pakai Framer Motion."

### Menjelaskan State Management
> "Untuk state management, saya pakai React Context — ada CartContext untuk shopping cart dan ThemeContext untuk dark/light mode. Saya pilih Context karena scope-nya cukup untuk project ini, tidak perlu Redux atau Zustand yang lebih complex."

---

## ❓ Q&A - Pertanyaan yang Mungkin Ditanyakan

### "Berapa lama bikin project ini?"
> "Kurang lebih [sesuaikan]. Tapi yang paling lama adalah bagian design dan copywriting fantasy-nya, karena harus konsisten di semua halaman."

### "Kenapa pakai Next.js, bukan React biasa?"
> "Next.js punya banyak keuntungan — ada file-based routing yang simpel, built-in optimization untuk images dan fonts, dan SEO-friendly karena bisa server-side rendering. Untuk website seperti ini yang butuh SEO bagus, Next.js pilihan tepat."

### "Kenapa pakai Gemini, bukan ChatGPT?"
> "Gemini 2.5 Flash itu cepat dan murah untuk use case seperti ini. Response time-nya bagus untuk real-time quiz. Plus, API-nya straightforward dan documentation-nya jelas."

### "Bagaimana handle responsive design?"
> "Tailwind CSS punya utility classes untuk responsive — seperti `md:`, `lg:`. Jadi saya define breakpoints dan adjust layout accordingly. Untuk cartography map yang complex, saya buat versi mobile terpisah (MobileRegionList) karena SVG map tidak ideal di layar kecil."

### "Apakah ada backend?"
> "Saat ini belum ada backend — ini fokus di frontend. Cart disimpan di memory (React state). Untuk production, bisa ditambahkan backend untuk persist data, authentication, dan payment processing."

### "Bagaimana struktur component-nya?"
> "Saya organize by feature, bukan by type. Jadi semua yang related ke Oracle ada di folder `components/oracle/`, semua cartography di `components/cartography/`. Ini memudahkan maintenance karena related code ada di satu tempat."

### "Apa tantangan terbesar?"
> "Interactive map. Bikin SVG yang bisa zoom, pan, hover, dan click itu tricky. Harus handle coordinate transformation antara SVG viewBox dan screen coordinates. Juga harus responsive dan tetap smooth di mobile."

### "Apakah ada testing?"
> "Saat ini belum ada automated tests. Untuk production, saya akan tambahkan Jest untuk unit tests dan Cypress atau Playwright untuk E2E tests, terutama untuk checkout flow."

---

## 🎯 Key Points yang Harus Diingat

1. **Tema**: Medieval fantasy RPG — bukan gimmick, tapi storytelling yang konsisten
2. **Tech**: Next.js 14 + TypeScript + Tailwind + Framer Motion
3. **AI**: Gemini 2.5 Flash untuk personalized recommendations
4. **UX**: Interactive map, custom drink builder, smooth animations
5. **Design**: Dark theme default, gold accent, Cinzel typography

---

## 🔄 Demo Checklist

Sebelum demo, pastikan:
- [ ] `npm run dev` sudah jalan
- [ ] File `.env.local` ada dengan Gemini API key
- [ ] Browser dalam keadaan fresh (clear cache jika perlu)
- [ ] Siapkan beberapa jawaban untuk Oracle quiz

Urutan demo yang recommended:
1. **Homepage** (30 detik) - scroll untuk tunjukkan parallax & animasi
2. **The Codex** (30 detik) - filter produk, hover card
3. **The Oracle** (1 menit) - full quiz demo, tunjukkan AI response
4. **The Alchemist** (1 menit) - buat custom drink, add to cart
5. **The Realms** (30 detik) - click region, zoom, baca lore
6. **Checkout** (30 detik) - tunjukkan cart sidebar dan flow

---

## 📝 Istilah Fantasy → Real World

| Fantasy Term | Artinya |
|-------------|---------|
| Gold Pieces (GP) | Harga dalam mata uang |
| The Codex | Katalog produk |
| The Oracle | AI recommendation quiz |
| The Alchemist | Custom drink builder |
| The Realms | Coffee origin map |
| Guild Menu | Menu minuman |
| Inner Circle | Newsletter subscription |
| Merchant's Desk | Checkout page |
| Chalice/Mug/Flask | Cup size/type |
| Potion/Elixir/Brew | Minuman |

---

*Generated for: Café Arcadia Project Audit*
*Last updated: April 2026*
