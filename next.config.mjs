/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
  },
  images: {
    domains: [
      "virucut.in",
      "192.168.93.81",
      "via.placeholder.com",
      "admin.virucut.in",
    ],
  },
};

export default nextConfig;
