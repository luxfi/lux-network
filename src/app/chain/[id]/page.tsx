import { chains } from '@/data/chains'
import ChainDetailContent from './chain-detail-content'

export function generateStaticParams() {
  return chains.map((c) => ({ id: c.id }))
}

export default function ChainPage() {
  return <ChainDetailContent />
}
