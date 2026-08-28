import createMDX from '@next/mdx'
import { createRequire } from 'node:module'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// `@hanzo/ui/next` is a build-time CommonJS module — it takes and returns a
// plain object rather than importing `next`, so it stays out of the type graph.
// It declares the settings that let a cross-platform component graph resolve on
// the web, for both bundlers at once.
const withGui = createRequire(import.meta.url)('@hanzo/ui/next')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dynamic Next.js app served by a Node server (output: 'standalone'),
  // packaged as a container image — NOT a static export. This restores the
  // server-rendered @luxfi/ui Header/Footer, the /checkout commerce panel,
  // the lux.id auth API routes, and src/middleware.ts (device detection +
  // auth). See LLM.md "Restore" notes.
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: [
    '@luxfi/ui',
    '@luxfi/data',
    '@luxfi/logo',
    '@luxfi/menu-icons',
    '@hanzo/ui',
    '@hanzo/commerce',
    '@hanzo/auth',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.lux.network', pathname: '**' },
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '**' },
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(withGui(nextConfig, dirname(fileURLToPath(import.meta.url))))
