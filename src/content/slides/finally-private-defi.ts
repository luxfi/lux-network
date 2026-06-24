import {
  type GridBlock,
  type EnhHeadingBlock,
  type SpaceBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_2_COL, COMMON_GRID_3_COL } from '@hanzo/ui/types'
import cellsFinallyPrivate from './finally-private-defi-cards'
import cellsPoweredBy from './powered-by-cards'

const byline = 'T-Chain ThresholdVM enables fully homomorphic encryption (FHE) for confidential on-chain computation. Keep transaction amounts, sources, and destinations private while enabling trustless verification via threshold decryption and Warp messaging.'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      icon: '/assets/content/icon-security-shield-504.png',
      specifiers: 'preheading-heading-font',
      iconSize: 40,
      preheading: {text: 'T-CHAIN FHE', level: 5, mb: 2},
      heading: {text: 'CONFIDENTIAL COMPUTING', level: 1},
      byline: {text: byline, level: 6},
    } as EnhHeadingBlock,
    {blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells: cellsFinallyPrivate,
    } as GridBlock,
    {blockType: 'space', sizes: {xs: 18}} as SpaceBlock,
    {blockType: 'enh-heading',
      heading: {text: 'POWERED BY LATTICE CRYPTOGRAPHY', level: 4},
    } as EnhHeadingBlock,
    {blockType: 'space', level: 6},
    {blockType: 'grid',
      grid: COMMON_GRID_3_COL,
      cells: cellsPoweredBy,
    } as GridBlock
  ]]
}
