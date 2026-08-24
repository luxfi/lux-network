import type {
  GridBlock,
  EnhHeadingBlock,
  Block,
} from '@hanzo/ui/blocks'

const bylines = [
  'Quasar consensus enables sub-second finality with 4,500+ TPS per chain. Wave voting and Focus confidence accumulation ensure rapid agreement across validator sets.',
  'Fourteen chains, each a purpose-built VM: P, X, C, D, B, O, T, Q, Z, K, A, G, R, I. Work routes to the chain built for it and runs in parallel.',
  'ZAP transport protocol provides zero-copy VM communication with 5-10x faster serialization than protobuf, 2-3x lower latency, and 30-50% CPU reduction.',
  'Flare finalization and Horizon finality protocols ensure deterministic transaction ordering. Prism geometry optimizes validator sampling for network-wide consensus.',
]


export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      icon: '/assets/content/icon-speed-475.png',
      iconSize: 40,
      preheading: {text: 'HIGH PERFORMANCE', level: 5, mb: 2},
      heading: {text: 'NEAR-INFINITE SCALE', level: 1},
    } as EnhHeadingBlock,
    {blockType: 'space', level: 6},
    {blockType: 'grid',
      specifiers: 'style-table-borders',
      grid: {
        at: { xs: {columns: 1, gap: 2}, md: {columns: 2, gap: 0}, xl: {columns: 2, gap: 0},  },
        mobile: 1
      },
      cells: [
        {blockType: 'enh-heading',
          heading: {text: 'Sub-second finality, 4,500+ TPS per chain.', level: 4},
          byline: {text: bylines[0], level: 6},
        } satisfies EnhHeadingBlock as Block,
        {blockType: 'enh-heading',
          heading: {text: 'Fourteen chains, fourteen virtual machines.', level: 4},
          byline: {text: bylines[1], level: 6},
        } satisfies EnhHeadingBlock as Block,
        {blockType: 'enh-heading',
          heading: {text: 'ZAP zero-copy transport protocol.', level: 4},
          byline: {text: bylines[2], level: 6},
        } satisfies EnhHeadingBlock as Block,
        {blockType: 'enh-heading',
          heading: {text: 'Deterministic finality with Flare and Horizon.', level: 4},
          byline: {text: bylines[3], level: 6},
        } as EnhHeadingBlock,
      ]
    } as GridBlock
  ]]
}
