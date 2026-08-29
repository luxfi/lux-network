'use client'

import { useParams } from 'next/navigation'
import { Box, css } from '@hanzo/ui'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, BookOpen, Layers, Cpu, Shield, Zap, Globe, Code } from 'lucide-react'
import { Github } from '@hanzo/ui/brands'

import { Header, Footer } from '@luxfi/ui'

import { chains, getChainById, coreChains, defiChains, privacyChains, infraChains } from '@/data/chains'
import siteDef from '@/site-def'

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
      <Box className="min-h-screen flex items-center justify-center">
        <Box className="text-center">
          <Box tag="h1" className="text-4xl font-bold mb-4">Chain Not Found</Box>
          <Box tag="p" className="text-muted-foreground mb-8">No chain with ID &quot;{params.id}&quot;</Box>
          <Link href="/" className={'text-primary hover:underline'} style={css('text-primary hover:underline')}>Back to Home</Link>
        </Box>
      </Box>
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
      <Header siteDef={siteDef} logoVariant='full' />

      {/* Hero */}
      <Box tag="section" className="pt-12 pb-16 relative overflow-hidden">
        <Box className={`absolute inset-0 bg-gradient-to-br ${chain.color} opacity-50`} />
        <Box className="relative max-w-5xl mx-auto px-6">
          <Link href="/#run-the-network" className={'inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors'} style={css('inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors')}>
            <ArrowLeft style={css('h-4 w-4')} /> All Chains
          </Link>

          <Box className="flex items-start gap-6 mb-6">
            <Box className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl font-bold flex-shrink-0">
              {chain.id}
            </Box>
            <div>
              <Box className="flex items-center gap-3 mb-2">
                <Box tag="h1" className="text-4xl sm:text-5xl font-bold">{chain.fullName}</Box>
              </Box>
              <Box className="flex items-center gap-3 text-sm">
                <Box tag="span" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  <CatIcon style={css('h-3.5 w-3.5')} />
                  {chain.categoryLabel}
                </Box>
                <Box tag="span" className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  {chain.consensus} Consensus
                </Box>
              </Box>
            </div>
          </Box>

          <Box tag="p" className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{chain.desc}</Box>

          <Box className="flex flex-wrap gap-3 mt-8">
            {chain.docsUrl && (
              <Box tag="a" href={chain.docsUrl} className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all text-sm">
                <BookOpen style={css('h-4 w-4')} /> Documentation
              </Box>
            )}
            {chain.githubUrl && (
              <Box tag="a" href={chain.githubUrl} className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors text-sm">
                <Github style={css('h-4 w-4')} /> Source Code
              </Box>
            )}
            {chain.explorerUrl && (
              <Box tag="a" href={chain.explorerUrl} className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors text-sm">
                <ExternalLink style={css('h-4 w-4')} /> Explorer
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Overview */}
      <Box tag="section" className="py-16">
        <Box className="max-w-5xl mx-auto px-6">
          <Box tag="h2" className="text-2xl font-bold mb-6">Overview</Box>
          <Box className="prose prose-invert max-w-none">
            {chain.longDesc.split('\n\n').map((para, i) => (
              <Box tag="p" key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Specs + Features */}
      <Box tag="section" className="py-16 bg-muted/30">
        <Box className="max-w-5xl mx-auto px-6">
          <Box className="grid lg:grid-cols-2 gap-12">
            {/* Specs */}
            <div>
              <Box tag="h2" className="text-2xl font-bold mb-6">Technical Specifications</Box>
              <Box className="space-y-0 rounded-2xl border border-border/50 overflow-hidden">
                {chain.specs.map((spec, i) => (
                  <Box key={spec.label} className={`flex items-center justify-between px-5 py-4 ${i > 0 ? 'border-t border-border/50' : ''}`}>
                    <Box tag="span" className="text-muted-foreground text-sm">{spec.label}</Box>
                    <Box tag="span" className="font-medium text-sm">{spec.value}</Box>
                  </Box>
                ))}
              </Box>
            </div>

            {/* Features */}
            <div>
              <Box tag="h2" className="text-2xl font-bold mb-6">Key Features</Box>
              <Box tag="ul" className="space-y-4">
                {chain.features.map((feature) => (
                  <Box tag="li" key={feature} className="flex items-start gap-3">
                    <Box className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <Box tag="span" className="text-foreground/90">{feature}</Box>
                  </Box>
                ))}
              </Box>
            </div>
          </Box>
        </Box>
      </Box>

      {/* SDK Example */}
      {chain.sdkExample && (
        <Box tag="section" className="py-16">
          <Box className="max-w-5xl mx-auto px-6">
            <Box tag="h2" className="text-2xl font-bold mb-2">SDK Example</Box>
            <Box tag="p" className="text-muted-foreground mb-6">Quick start using the Lux JavaScript SDK.</Box>
            <Box className="bg-card rounded-2xl border border-border p-6 font-mono text-sm overflow-hidden">
              <Box className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Box className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <Box className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <Box className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <Box tag="span" className="ml-2 text-xs">{chain.id.toLowerCase()}-chain-example.ts</Box>
              </Box>
              <Box tag="pre" className="text-foreground/90 leading-relaxed overflow-x-auto"><code>{chain.sdkExample}</code></Box>
            </Box>

            <Box className="mt-8">
              <Box tag="h3" className="text-lg font-semibold mb-4">Available SDKs</Box>
              <Box className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'JavaScript', pkg: 'luxnet', href: 'https://www.npmjs.com/package/luxnet' },
                  { name: 'Go', pkg: 'github.com/luxfi/sdk', href: 'https://github.com/luxfi/sdk' },
                  { name: 'Contracts', pkg: '@luxfi/contracts', href: 'https://www.npmjs.com/package/@luxfi/contracts' },
                  { name: 'Wallet', pkg: '@luxfi/wallet-sdk', href: 'https://github.com/luxfi/wallet' },
                ].map((sdk) => (
                  <Box tag="a" key={sdk.name} href={sdk.href} className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all cursor-pointer">
                    <Box className="flex items-center justify-between mb-1">
                      <Box tag="span" className="font-semibold text-sm">{sdk.name}</Box>
                      <ArrowUpRight style={css('h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors')} />
                    </Box>
                    <Box tag="span" className="text-xs text-muted-foreground font-mono">{sdk.pkg}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {/* Navigation */}
      <Box tag="section" className="py-12 border-t border-border/50">
        <Box className="max-w-5xl mx-auto px-6">
          <Box className="flex items-center justify-between">
            {prevChain ? (
              <Link href={`/chain/${prevChain.id}`} className={'group flex items-center gap-3 hover:text-primary transition-colors'} style={css('group flex items-center gap-3 hover:text-primary transition-colors')}>
                <ArrowLeft style={css('h-4 w-4')} />
                <div>
                  <Box tag="span" className="text-xs text-muted-foreground">Previous</Box>
                  <Box tag="p" className="font-semibold">{prevChain.id}-Chain ({prevChain.name})</Box>
                </div>
              </Link>
            ) : <div />}
            {nextChain ? (
              <Link href={`/chain/${nextChain.id}`} className={'group flex items-center gap-3 text-right hover:text-primary transition-colors'} style={css('group flex items-center gap-3 text-right hover:text-primary transition-colors')}>
                <div>
                  <Box tag="span" className="text-xs text-muted-foreground">Next</Box>
                  <Box tag="p" className="font-semibold">{nextChain.id}-Chain ({nextChain.name})</Box>
                </div>
                <ArrowRight style={css('h-4 w-4')} />
              </Link>
            ) : <div />}
          </Box>
        </Box>
      </Box>

      {/* Unified Lux footer */}
      <Footer siteDef={siteDef} className="w-full pt-16 lg:mx-auto" />
    </>
  )
}
