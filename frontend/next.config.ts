import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
