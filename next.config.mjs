/** @type {import('next').NextConfig} */
const repo = "ephraimjaysolasco_personal-portfolio-website"
const isProd = process.env.NODE_ENV === "production"
const basePath = isProd ? `/${repo}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
