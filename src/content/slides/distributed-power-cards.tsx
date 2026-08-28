import Link from 'next/link'
import { Box } from '@hanzo/ui'
import type {
  Block,
  CardBlock,
} from '@hanzo/ui/blocks'

const cardContent = (headline: string, byline: React.ReactNode) => <div><h5><Box tag="span" className='border-b-2 border-secondary'>{headline}</Box></h5><p>{byline}</p></div>

const headlines = [
  'Quasar Protocol',
  'Wave Voting',
  'Flare Finalization',
  'Prism Geometry'
]

const bylines = [
  'Main consensus protocol enabling sub-second finality with 4,500+ TPS per chain. Byzantine fault tolerant with optimal message complexity.',
  'Efficient voting mechanism that samples validator subsets for rapid agreement. Focus confidence accumulation ensures high-confidence decisions.',
  'DAG-based finalization protocol that orders transactions deterministically. Horizon finality provides provable irreversibility guarantees.',
  'Geometric optimization of validator sampling for network-wide consensus. Enables efficient cross-chain coordination via Warp messaging.'
]

export default [
  {blockType: 'card',
    specifiers: 'content-top ghost',
    content: cardContent(headlines[0], bylines[0]),
  } as CardBlock,
  {blockType: 'card',
    specifiers: 'content-top ghost',
    content: cardContent(headlines[1], bylines[1]),
  } as CardBlock,
  {blockType: 'card',
    specifiers: 'content-top ghost',
    content: cardContent(headlines[2], bylines[2]),
  } as CardBlock,
  {blockType: 'card',
    specifiers: 'content-top ghost',
    content: cardContent(headlines[3], bylines[3]),
  } as CardBlock,
] as Block[]
