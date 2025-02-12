import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Bỏ qua ESLint khi build
  },
};

export default nextConfig;
