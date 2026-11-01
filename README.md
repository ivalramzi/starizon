# proyek-next

Proyek ini dikonversi dari situs HTML statis ke **Next.js 16** (App Router + TypeScript) oleh Depup.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Butuh Node.js 20.9 atau lebih baru.

## Halaman

- `Starizon___Studio_Desain_dan_Teknologi.html` → `/` (`app/page.tsx`). URL lama `/Starizon___Studio_Desain_dan_Teknologi` otomatis diarahkan ke `/`.

## Yang perlu diketahui

- Aset (gambar, font, CSS, JS) ada di `public/` dengan path yang sama seperti situs lama, jadi URL lama tetap valid.
- Skrip bawaan situs lama dijalankan lewat `components/PageScripts.tsx` setiap halaman dibuka. Kalau kamu menulis ulang bagian itu sebagai komponen React, hapus skripnya dari `public/` dan dari `<PageScripts />`.
- `next.config.mjs` memuat `typescript.ignoreBuildErrors` supaya build tidak berhenti di tipe atribut HTML lama. Hapus setelah `npx tsc --noEmit` bersih.
- Untuk gambar Open Graph dengan path relatif, isi `metadataBase` di `app/layout.tsx` (mis. `metadataBase: new URL("https://domainmu.com")`).
- Tautan antarhalaman memakai `<Link>` dari `next/link`; tautan ke luar tetap `<a>`.
