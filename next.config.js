const withMDX = require('@next/mdx')()
const svgrWebpackConfig = require('./svgr.next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: [],
    },
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lux.network',
        pathname: '**',
      },
      {
        protocol: "http",
        hostname: "localhost",
      }
    ],
 },
    // https://stackoverflow.com/questions/72621835/how-to-fix-you-may-need-an-appropriate-loader-to-handle-this-file-type-current
  transpilePackages: [
    '@hanzo/ui',
    '@hanzo/auth',
    '@hanzo/commerce',
    '@luxfi/ui',
    '@luxfi/data',
    '@luxfi/menu-icons'
  ],
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {
    config = svgrWebpackConfig(config, options)
    // Stub out server action files
    config.resolve.alias = {
      ...config.resolve.alias,
      'server-only': false,
    }
    return config
  }
}

module.exports = withMDX(nextConfig)
