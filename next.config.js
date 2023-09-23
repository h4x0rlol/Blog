/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.fs/,
        type: 'asset/source',
      },
      {
        test: /\.vs/,
        type: 'asset/source',
      },
    );
    return config;
  },
};

module.exports = nextConfig;
