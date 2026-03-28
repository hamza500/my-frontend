import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  suppressHydrationWarning: false,
};

export default nextConfig;
