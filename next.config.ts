import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // AVIF pierwszy — zdjęcia z sesji to głównie skóra i ciepłe gradienty,
    // na których AVIF wygrywa z WebP o ~30% wagi.
    formats: ["image/avif", "image/webp"],
    // rok cache — pliki w public/foto/ są niezmienne
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
