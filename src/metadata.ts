import type { Metadata } from 'next'

export default {
  metadataBase: new URL('https://lux.network'),
  title: {
    default: 'Lux Network - Post-Quantum, Privacy-First Blockchain',
    template: '%s | Lux Network',
  },
  description: 'Multi-chain architecture with six specialized VMs. Post-quantum security, FHE privacy, sub-second finality, and 4,500+ TPS per chain.',
  applicationName: 'Lux Network',
  authors: { name: 'Lux Network' },
  keywords: [
    'Lux Network',
    'Post-Quantum Blockchain',
    'FHE',
    'Fully Homomorphic Encryption',
    'Multi-Chain',
    'EVM Compatible',
    'DeFi',
    'Privacy Blockchain',
    'High Performance Blockchain',
    'Quasar Consensus',
    'Zero Knowledge',
    'ML-KEM',
    'ML-DSA',
    'SLH-DSA',
  ].join(', '),
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/lux-site-icons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/lux-site-icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/assets/lux-site-icons/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/assets/lux-site-icons/android-chrome-512x512.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/assets/lux-site-icons/apple-touch-icon.png',
    },
  ],
  openGraph: {
    title: 'Lux Network - Post-Quantum, Privacy-First Blockchain',
    description: 'Multi-chain architecture with six specialized VMs. Post-quantum security (ML-KEM, ML-DSA, SLH-DSA), FHE privacy on T-Chain, sub-second finality, and 4,500+ TPS per chain.',
    images: 'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-poster.jpg',
    type: 'website',
    url: 'https://lux.network',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lux Network - Post-Quantum, Privacy-First Blockchain',
    description: 'Six specialized chains (P, X, C, D, T, Q) with post-quantum security, FHE privacy, and 4,500+ TPS per chain.',
    images: 'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-poster.jpg',
    site: '@luxfi',
  },
  formatDetection: { telephone: false },
  other: {
    'msapplication-TileColor': '#000000',
  },
} as Metadata
