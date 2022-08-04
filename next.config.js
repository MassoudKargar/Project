/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
const path = require('node:path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
