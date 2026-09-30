/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? "/orbe-site" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/orbe-site/" : "",
};
export default nextConfig;
