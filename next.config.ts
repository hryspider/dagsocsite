import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/banner',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

// next.config.js
module.exports = {
  allowedDevOrigins: ['www.dagsoc.com'],
};
