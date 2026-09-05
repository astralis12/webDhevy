/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This prevents ESLint from breaking the build
  },
}

module.exports = nextConfig