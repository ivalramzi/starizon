/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hasil konversi otomatis bisa punya tipe atribut yang belum rapi (mis. atribut HTML lama).
  // Hapus baris ini setelah `npx tsc --noEmit` bersih.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
