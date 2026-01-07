import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gw.alicdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
