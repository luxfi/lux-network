import type {
  Block,
  CarteBlancheBlock,
  ImageBlock,
} from '@hanzo/ui/blocks'

const bylines = [
  'Fully Homomorphic Encryption enables computation on encrypted data without decryption. T-Chain uses lattice-based FHE from github.com/luxfi/lattice for confidential smart contracts.',
  'Threshold decryption via distributed key generation (DKG) ensures no single party can decrypt data. FROST and CGGMP21 protocols enable secure multi-party signing.',
  'MPC custody with dynamic signer rotation via LSS protocol. T-Chain supports ECDSA and EdDSA threshold signatures for cross-chain asset management.'
]
 // re images: https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-with-aspect-ratio
export default [
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 500, h: 400},
      alt: 'image',
      src: '/assets/content/icon-encryption-purple-thicker-p-500.png',
      props: {style: { width: 'auto', height: 50}}
    }  as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Fully Homomorphic Encryption', level: 4},
      byline: { text: bylines[0], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 500, h: 400},
      alt: 'image',
      src: '/assets/content/icon-proof-purple-p-500.png',
      props: {style: { width: 'auto', height: 50 }}
    } as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Threshold Decryption', level: 4},
      byline: { text: bylines[1], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 500, h: 400},
      alt: 'image',
      src: '/assets/content/icon-zk-rollups-purple-2-p-500.png',
      props: {style: { width: 'auto', height: 50 }}
    } as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Multi-Party Computation', level: 4},
      byline: { text: bylines[2], level: 0}
    }
  } as CarteBlancheBlock,
] as Block[]
