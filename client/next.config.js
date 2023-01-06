/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.fs/,
        type: "asset/source",
      },
      {
        test: /\.vs/,
        type: "asset/source",
      }
    );
    return config;
  },
};

module.exports = nextConfig;
