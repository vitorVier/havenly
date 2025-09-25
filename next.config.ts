import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cf.bstatic.com', 'picsum.photos'], // adicione todos os domínios externos que você usar
  },
};

export default nextConfig;
