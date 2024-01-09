const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  experimental: {
    appDir: true,
  },
};

module.exports = withMDX(nextConfig);
