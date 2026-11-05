/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the dev HMR cache separate from production builds. Running `next build`
  // while `next dev` is active otherwise lets both processes write to `.next`.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
};

export default nextConfig;
