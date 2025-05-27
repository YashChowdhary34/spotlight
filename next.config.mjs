/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip ESLint during next build / vercel build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip type-checking errors during production build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
