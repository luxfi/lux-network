import createMDX from '@next/mdx'

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
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.lux.network', pathname: '**' },
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '**' },
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // SVGR: import *.svg as React components (and *.svg?url as URLs). @luxfi/ui's
  // footer (community column) imports an inline .svg as a component; without
  // this loader the import resolves to an asset object and React throws
  // "Element type is invalid … got: object" on hydration. Restored from the
  // original full app's svgr.next.config.js. https://react-svgr.com/docs/next
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))
    config.module.rules.push(
      { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ }, // *.svg?url -> URL
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    )
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
