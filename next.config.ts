import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Bỏ qua ESLint khi build
  },
  experimental: {
    esmExternals: false, // Fix lỗi import/export với module ESM
  },
};

export default nextConfig;
