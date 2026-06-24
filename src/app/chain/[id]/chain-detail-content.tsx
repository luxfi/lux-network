'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github,
  BookOpen, Layers, Cpu, Shield, Zap, Globe, Code,
} from 'lucide-react'
import { chains, getChainById, coreChains, defiChains, privacyChains, infraChains } from '@/data/chains'
import siteDef from '@/site-def'

const Header = dynamic(() => import('@luxfi/ui').then(mod => mod.Header), { ssr: false })
const Footer = dynamic(() => import('@luxfi/ui').then(mod => mod.Footer), { ssr: false })

const categoryIcon: Record<string, typeof Shield> = {
  core: Layers,
  defi: Zap,
  privacy: Shield,
  infra: Cpu,
}

export default function ChainDetailPage() {
  const params = useParams()
  const chain = getChainById(params.id as string)

  if (!chain) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Chain Not Found</h1>
          <p className="text-muted-foreground mb-8">No chain with ID &quot;{params.id}&quot;</p>
          <Link href="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </div>
    )
  }

  const CatIcon = categoryIcon[chain.category] ?? Globe
  const allChains = [...coreChains, ...defiChains, ...privacyChains, ...infraChains]
  const currentIndex = allChains.findIndex(c => c.id === chain.id)
  const prevChain = currentIndex > 0 ? allChains[currentIndex - 1] : null
  const nextChain = currentIndex < allChains.length - 1 ? allChains[currentIndex + 1] : null

  return (
    <>
      {/* Unified Lux header */}
      <Header siteDef={siteDef} />

      {/* Hero */}
      <section className="pt-12 pb-16 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${chain.color} opacity-50`} />
        <div className="relative max-w-5xl mx-auto px-6">
          <Link href="/#run-the-network" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All Chains
          </Link>

          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl font-bold flex-shrink-0">
              {chain.id}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl sm:text-5xl font-bold">{chain.fullName}</h1>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  <CatIcon className="h-3.5 w-3.5" />
                  {chain.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  {chain.consensus} Consensus
                </span>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{chain.desc}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            {chain.docsUrl && (
              <a href={chain.docsUrl} className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all text-sm">
                <BookOpen className="h-4 w-4" /> Documentation
              </a>
            )}
            {chain.githubUrl && (
              <a href={chain.githubUrl} className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors text-sm">
                <Github className="h-4 w-4" /> Source Code
              </a>
            )}
            {chain.explorerUrl && (
              <a href={chain.explorerUrl} className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors text-sm">
                <ExternalLink className="h-4 w-4" /> Explorer
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="prose prose-invert max-w-none">
            {chain.longDesc.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specs */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              <div className="space-y-0 rounded-2xl border border-border/50 overflow-hidden">
                {chain.specs.map((spec, i) => (
                  <div key={spec.label} className={`flex items-center justify-between px-5 py-4 ${i > 0 ? 'border-t border-border/50' : ''}`}>
                    <span className="text-muted-foreground text-sm">{spec.label}</span>
                    <span className="font-medium text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {chain.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Example */}
      {chain.sdkExample && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-2">SDK Example</h2>
            <p className="text-muted-foreground mb-6">Quick start using the Lux JavaScript SDK.</p>
            <div className="bg-card rounded-2xl border border-border p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs">{chain.id.toLowerCase()}-chain-example.ts</span>
              </div>
              <pre className="text-foreground/90 leading-relaxed overflow-x-auto"><code>{chain.sdkExample}</code></pre>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Available SDKs</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'JavaScript', pkg: 'luxnet', href: 'https://www.npmjs.com/package/luxnet' },
                  { name: 'Go', pkg: 'github.com/luxfi/sdk', href: 'https://github.com/luxfi/sdk' },
                  { name: 'Contracts', pkg: '@luxfi/contracts', href: 'https://www.npmjs.com/package/@luxfi/contracts' },
                  { name: 'Wallet', pkg: '@luxfi/wallet-sdk', href: 'https://github.com/luxfi/wallet' },
                ].map((sdk) => (
                  <a key={sdk.name} href={sdk.href} className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{sdk.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{sdk.pkg}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {prevChain ? (
              <Link href={`/chain/${prevChain.id}`} className="group flex items-center gap-3 hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <div>
                  <span className="text-xs text-muted-foreground">Previous</span>
                  <p className="font-semibold">{prevChain.id}-Chain ({prevChain.name})</p>
                </div>
              </Link>
            ) : <div />}
            {nextChain ? (
              <Link href={`/chain/${nextChain.id}`} className="group flex items-center gap-3 text-right hover:text-primary transition-colors">
                <div>
                  <span className="text-xs text-muted-foreground">Next</span>
                  <p className="font-semibold">{nextChain.id}-Chain ({nextChain.name})</p>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Unified Lux footer */}
      <Footer siteDef={siteDef} className="w-full pt-16 lg:mx-auto" />
    </>
  )
}
