import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 开发时缩短优化图缓存，避免替换 public 资源后仍看到旧图（仍建议配合 NEXT_PUBLIC_LOGO_VERSION）
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
