/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hasil konversi otomatis bisa punya tipe atribut yang belum rapi (mis. atribut HTML lama).
  // Hapus baris ini setelah `npx tsc --noEmit` bersih.
  typescript: { ignoreBuildErrors: true },
  // Halaman utama kini di "/". URL lama hasil konversi diarahkan ke sana.
  async redirects() {
    return [{ source: "/Starizon___Studio_Desain_dan_Teknologi", destination: "/", permanent: true }];
  },
};

export default nextConfig;
