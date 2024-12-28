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
      "192.168.123.81",
      "placehold.co",
      "admin.virucut.in",
    ],
  },
};

export default nextConfig;
