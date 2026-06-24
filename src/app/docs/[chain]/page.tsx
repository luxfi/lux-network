import { chains } from '@/data/chains'
import DocsChainContent from './docs-chain-content'

export function generateStaticParams() {
  return chains.map((c) => ({ chain: c.id }))
}

export default function DocsChainPage() {
  return <DocsChainContent />
}
