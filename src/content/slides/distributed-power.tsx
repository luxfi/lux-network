import type {
  GridBlock,
  EnhHeadingBlock,
  ImageBlock,
  ScreenfulBlock
} from '@hanzo/ui/blocks'
import { COMMON_GRID_4_COL } from '@hanzo/ui/types'
import cells from './distributed-power-cards'

const byline = 'One consensus across all fourteen chains. Quasar runs Photon, Wave and Focus to sub-second finality, and tolerates Byzantine validators throughout.'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {
      blockType: 'grid',
      grid: {
        at: {
          xs: { columns: 1, gap: 2 },
          md: { columns: 2, gap: 3 },
          lg: { columns: 2, gap: 6 }
        },
        mobile: { columns: 1, gap: 2 }
      },
      cells: [
        {
          blockType: 'enh-heading',
          icon: '/assets/content/icon-dao-copy.png',
          iconSize: 40,
          preheading: { text: 'QUASAR CONSENSUS', level: 5, mb: 2 },
          heading: { text: 'DISTRIBUTED POWER', level: 1 },
          byline: { text: byline, level: 6 },
        } as EnhHeadingBlock,
        {
          blockType: 'image',
          src: '/assets/content/illustration-dao-purple-p-800.png',
          alt: 'Quasar Consensus',
          dim: { h: 300, w: 300 },
        } as ImageBlock,
      ],
    } as GridBlock,
    { blockType: 'space', level: 6 },
    {
      blockType: 'grid',
      grid: COMMON_GRID_4_COL,
      cells,
    } as GridBlock
  ]]
} as ScreenfulBlock
