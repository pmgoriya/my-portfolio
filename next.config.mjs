/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 💥 Required for static S3 hosting
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, //true mandatory for s3 otherwise false
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
};

export default nextConfig;
