/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
