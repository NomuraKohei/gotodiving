/** @type {import('next').NextConfig} */
const prefixPath = "/src";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: prefixPath,
  basePath: prefixPath,
};

module.exports = nextConfig;
