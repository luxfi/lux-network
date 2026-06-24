import type {
  Block,
  CarteBlancheBlock,
  ImageBlock,
} from '@hanzo/ui/blocks'

const bylines = [
  'T-Chain ThresholdVM enables FHE operations with threshold decryption via Warp messaging. Lattice-based cryptography from github.com/luxfi/lattice powers confidential smart contracts.',
  'FHE precompiles at dedicated addresses (0x02...80-83) provide native encryption, ACL management, input verification, and gateway operations for encrypted execution.'
]
 // re images: https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-with-aspect-ratio
export default [
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 217, h: 165},
      alt: 'image',
      src: '/assets/content/icon-zchain-privacy-purple.png',
      props: {style: { width: 'auto', height: 50}}
    }  as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'T-CHAIN THRESHOLDVM', level: 3, mb: 4},
      byline: { text: bylines[0], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 558, h: 165},
      alt: 'image',
      src: '/assets/content/icon-z-chain-purple-2.png',
      props: {style: { width: 'auto', height: 50 }}
    } as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'FHE PRECOMPILES', level: 3, mb: 4},
      byline: { text: bylines[1], level: 0}
    }
  } as CarteBlancheBlock,
] as Block[]
