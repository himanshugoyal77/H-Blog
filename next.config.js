/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.freepnglogos.com",
      "cdn-icons-png.flaticon.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
      "himanshu-goyal-delta.vercel.app",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude 'undici' from being bundled on the client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        undici: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
