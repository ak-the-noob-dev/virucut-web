/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["127.0.0.1", "virucut.in", "192.168.93.81"],
  },
};

export default nextConfig;
