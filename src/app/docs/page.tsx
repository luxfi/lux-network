'use client'

import Link from 'next/link'
import { Box, css } from '@hanzo/ui'
import { ArrowRight, Layers, Zap, Shield, Cpu } from 'lucide-react'

import { Header, Footer } from '@luxfi/ui'

import { coreChains, defiChains, privacyChains, infraChains } from '@/data/chains'
import siteDef from '@/site-def'

const categories = [
  { label: 'Core Chains', icon: Layers, chains: coreChains, desc: 'The foundational chains that run on every node.' },
  { label: 'DeFi & Markets', icon: Zap, chains: defiChains, desc: 'Purpose-built chains for decentralized finance.' },
  { label: 'Privacy & Security', icon: Shield, chains: privacyChains, desc: 'Post-quantum cryptography and zero-knowledge privacy.' },
  { label: 'Infrastructure', icon: Cpu, chains: infraChains, desc: 'Data indexing, relay, identity, and AI compute.' },
]

export default function DocsIndexPage() {
  return (
    <>
      <Header siteDef={siteDef} logoVariant='full' />

      <Box className="max-w-5xl mx-auto px-6 py-16">
        <Box tag="h1" className="text-4xl sm:text-5xl font-bold mb-4">Chain Documentation</Box>
        <Box tag="p" className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Technical documentation for all 14 specialized chains on Lux Network. Each chain is purpose-built for a specific domain.
        </Box>

        <Box className="space-y-12">
          {categories.map(cat => (
            <div key={cat.label}>
              <Box className="flex items-center gap-3 mb-2">
                <cat.icon className="h-5 w-5 text-primary" />
                <Box tag="h2" className="text-xl font-bold">{cat.label}</Box>
              </Box>
              <Box tag="p" className="text-muted-foreground text-sm mb-4">{cat.desc}</Box>
              <Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.chains.map(chain => (
                  <Link
                    key={chain.id}
                    href={`/docs/${chain.id.toLowerCase()}`}
                    className={`group relative p-5 rounded-2xl border border-border/50 bg-gradient-to-br ${chain.color} hover:border-primary/30 transition-all duration-300 hover:-translate-y-1`} style={css(`group relative p-5 rounded-2xl border border-border/50 bg-gradient-to-br ${chain.color} hover:border-primary/30 transition-all duration-300 hover:-translate-y-1`)}
                  >
                    <Box className="flex items-center gap-3 mb-2">
                      <Box tag="span" className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg font-bold">{chain.id}</Box>
                      <div>
                        <Box tag="h3" className="font-semibold">{chain.name}</Box>
                        <Box tag="span" className="text-[10px] text-muted-foreground">{chain.consensus}</Box>
                      </div>
                    </Box>
                    <Box tag="p" className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{chain.desc}</Box>
                    <ArrowRight style={css('absolute top-5 right-5 h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors')} />
                  </Link>
                ))}
              </Box>
            </div>
          ))}
        </Box>
      </Box>

      <Footer siteDef={siteDef} className="w-full pt-16 lg:mx-auto" />
    </>
  )
}
