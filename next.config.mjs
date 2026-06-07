/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "oneservidores-web";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : ""
};

export default nextConfig;
