/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Netlify's static hosting doesn't run Next's image optimizer (/_next/image
  // 301s), so serve images directly from /_next/static instead.
  images: { unoptimized: true },
}

module.exports = nextConfig
