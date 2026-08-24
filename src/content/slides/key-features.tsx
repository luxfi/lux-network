import type { BulletCardsBlock } from '@hanzo/ui/blocks'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading', heading: {text: 'KEY FEATURES', level: 3}, specifiers: 'center'},
    {blockType: 'space', level: 6},
    {blockType: 'bullet-cards',
      grid: {
        at: { xs: 1, md: 2, lg: {columns: 3, gap: 8}, xl: {columns: 3, gap: 8} },
        mobile: 1
      },
      iconSize: 28,
      cards: [
        {
          text: 'Fourteen chains: P, X, C, D, B, O, T, Q, Z, K, A, G, R, I.',
          icon: '/assets/content/icon-apps-475.png'
        },
        {
          text: 'Sub-second finality with 4,500+ TPS per chain via Quasar consensus.',
          icon: '/assets/content/icon-speed-475.png'
        },
        {
          text: 'Full EVM compatibility on C-Chain with native smart contracts.',
          icon: '/assets/content/icon-eth-475.png'
        },
        {
          text: 'Post-quantum cryptography: ML-KEM, ML-DSA, SLH-DSA, FROST.',
          icon: '/assets/content/icon-security-shield-504.png'
        },
        {
          text: 'T-Chain FHE for confidential computing and threshold operations.',
          icon: '/assets/content/icon-24-7-security-475.png'
        },
        {
          text: 'D-Chain DEX with native order book, perpetuals, and AMM.',
          icon: '/assets/content/icon-fiat-coins-475.png'
        },
        {
          text: 'ZAP transport protocol for zero-copy VM communication.',
          icon: '/assets/content/icon-dao-475.png'
        },
        {
          text: 'Warp cross-chain messaging with BLS aggregate signatures.',
          icon: '/assets/content/icon-regulatory-compliant-475.png'
        },
        {
          text: 'Network ID 96369 (Mainnet), 96368 (Testnet). Go 1.23.9+.',
          icon: <p className='font-serif text-[24px] leading-[28px] font-bold h-[28px] pr-2'>ID</p>
        },
      ]
    } as BulletCardsBlock
  ]]
}
