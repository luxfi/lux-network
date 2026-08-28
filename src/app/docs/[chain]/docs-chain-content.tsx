'use client'

import { useParams } from 'next/navigation'
import { Box, css } from '@hanzo/ui'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github,
  BookOpen, Terminal, Layers, Cpu, Shield, Zap, Globe, Code, Copy,
} from 'lucide-react'
import { chains, getChainById, coreChains, defiChains, privacyChains, infraChains } from '@/data/chains'
import dynamic from 'next/dynamic'

const Logo = dynamic(() => import('@luxfi/ui').then(mod => mod.Logo), { ssr: false })

export default function ChainDocsPage() {
  const params = useParams()
  const chainId = (params.chain as string)?.toUpperCase()
  const chain = getChainById(chainId)

  if (!chain) {
    return (
      <Box className="min-h-screen flex items-center justify-center">
        <Box className="text-center">
          <Box tag="h1" className="text-4xl font-bold mb-4">Documentation Not Found</Box>
          <Box tag="p" className="text-muted-foreground mb-8">No documentation for chain &quot;{params.chain}&quot;</Box>
          <Link href="/docs" className={'text-primary hover:underline'} style={css('text-primary hover:underline')}>Back to Docs</Link>
        </Box>
      </Box>
    )
  }

  const allChains = [...coreChains, ...defiChains, ...privacyChains, ...infraChains]

  return (
    <Box className="min-h-screen flex">
      {/* Sidebar */}
      <Box tag="aside" className="hidden lg:block w-64 border-r border-border/50 sticky top-0 h-screen overflow-y-auto py-8 px-4">
        <Logo size='md' variant='full' href='/' outerClx='mb-8 px-3' />

        <Box tag="nav" className="space-y-6">
          {[
            { label: 'Core Chains', chains: coreChains },
            { label: 'DeFi Chains', chains: defiChains },
            { label: 'Privacy Chains', chains: privacyChains },
            { label: 'Infrastructure', chains: infraChains },
          ].map(group => (
            <div key={group.label}>
              <Box tag="h3" className="text-xs font-semibold tracking-widest uppercase text-muted-foreground px-3 mb-2">{group.label}</Box>
              <Box tag="ul" className="space-y-0.5">
                {group.chains.map(c => (
                  <li key={c.id}>
                    <Link
                      href={`/docs/${c.id.toLowerCase()}`}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        c.id === chain.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`} style={css(`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        c.id === chain.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`)}
                    >
                      <Box tag="span" className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs font-bold">{c.id}</Box>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </Box>
            </div>
          ))}
        </Box>
      </Box>

      {/* Main Content */}
      <Box tag="main" className="flex-1 min-w-0">
        {/* Top bar */}
        <Box tag="header" className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border/50 bg-background/90 backdrop-blur-xl px-6">
          <Box className="flex items-center gap-4">
            <Logo size='sm' variant='full' href='/' outerClx='lg:hidden' />
            <Box tag="span" className="text-sm text-muted-foreground">Documentation</Box>
          </Box>
          <Box className="flex items-center gap-3">
            {chain.githubUrl && (
              <Box tag="a" href={chain.githubUrl} className="text-muted-foreground hover:text-foreground transition-colors">
                <Github style={css('h-4 w-4')} />
              </Box>
            )}
          </Box>
        </Box>

        <Box className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <Box className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/docs" className={'hover:text-foreground transition-colors'} style={css('hover:text-foreground transition-colors')}>Docs</Link>
            <span>/</span>
            <Box tag="span" className="text-foreground">{chain.id}-Chain ({chain.name})</Box>
          </Box>

          {/* Title */}
          <Box tag="h1" className="text-4xl font-bold mb-4">{chain.fullName}</Box>
          <Box tag="p" className="text-lg text-muted-foreground mb-8">{chain.desc}</Box>

          {/* Quick links */}
          <Box className="flex flex-wrap gap-3 mb-12">
            <Link href={`/chain/${chain.id}`} className={'inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm hover:bg-muted/80 transition-colors'} style={css('inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm hover:bg-muted/80 transition-colors')}>
              <Layers style={css('h-3.5 w-3.5')} /> Chain Overview
            </Link>
            {chain.explorerUrl && (
              <Box tag="a" href={chain.explorerUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm hover:bg-muted/80 transition-colors">
                <ExternalLink style={css('h-3.5 w-3.5')} /> Explorer
              </Box>
            )}
            {chain.githubUrl && (
              <Box tag="a" href={chain.githubUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm hover:bg-muted/80 transition-colors">
                <Github style={css('h-3.5 w-3.5')} /> Source
              </Box>
            )}
          </Box>

          {/* Overview */}
          <Box tag="section" className="mb-12">
            <Box tag="h2" className="text-2xl font-bold mb-4">Overview</Box>
            {chain.longDesc.split('\n\n').map((para, i) => (
              <Box tag="p" key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</Box>
            ))}
          </Box>

          {/* Technical Specs */}
          <Box tag="section" className="mb-12">
            <Box tag="h2" className="text-2xl font-bold mb-4">Technical Specifications</Box>
            <Box className="rounded-2xl border border-border/50 overflow-hidden">
              {chain.specs.map((spec, i) => (
                <Box key={spec.label} className={`flex items-center justify-between px-5 py-3.5 ${i > 0 ? 'border-t border-border/50' : ''}`}>
                  <Box tag="span" className="text-muted-foreground text-sm">{spec.label}</Box>
                  <Box tag="code" className="text-sm font-mono bg-muted px-2 py-0.5 rounded">{spec.value}</Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Features */}
          <Box tag="section" className="mb-12">
            <Box tag="h2" className="text-2xl font-bold mb-4">Features</Box>
            <Box className="grid sm:grid-cols-2 gap-3">
              {chain.features.map((feature) => (
                <Box key={feature} className="flex items-start gap-3 p-4 rounded-xl border border-border/50">
                  <Box className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <Box tag="span" className="text-sm text-foreground/90">{feature}</Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Quick Start */}
          {chain.sdkExample && (
            <Box tag="section" className="mb-12">
              <Box tag="h2" className="text-2xl font-bold mb-2">Quick Start</Box>
              <Box tag="p" className="text-muted-foreground mb-4">Install the Lux SDK and start interacting with {chain.name} Chain.</Box>

              {/* Install */}
              <Box className="mb-6">
                <Box tag="h3" className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Terminal style={css('h-4 w-4')} /> Installation
                </Box>
                <Box className="bg-card rounded-xl border border-border p-4 font-mono text-sm">
                  <Box tag="code" className="text-foreground/90">npm install luxnet</Box>
                </Box>
              </Box>

              {/* Example */}
              <Box className="mb-6">
                <Box tag="h3" className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Code style={css('h-4 w-4')} /> Example
                </Box>
                <Box className="bg-card rounded-xl border border-border p-4 font-mono text-sm overflow-x-auto">
                  <Box tag="pre" className="text-foreground/90 leading-relaxed"><code>{chain.sdkExample}</code></Box>
                </Box>
              </Box>

              {/* SDK Links */}
              <div>
                <Box tag="h3" className="text-sm font-semibold mb-3">SDKs & Libraries</Box>
                <Box className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: 'JavaScript SDK', pkg: 'luxnet', href: 'https://www.npmjs.com/package/luxnet', install: 'npm i luxnet' },
                    { name: 'Go SDK', pkg: 'github.com/luxfi/sdk', href: 'https://github.com/luxfi/sdk', install: 'go get github.com/luxfi/sdk' },
                    { name: 'Smart Contracts', pkg: '@luxfi/contracts', href: 'https://www.npmjs.com/package/@luxfi/contracts', install: 'npm i @luxfi/contracts' },
                    { name: 'Wallet SDK', pkg: '@luxfi/wallet-sdk', href: 'https://github.com/luxfi/wallet', install: 'npm i @luxfi/wallet-sdk' },
                  ].map(sdk => (
                    <Box tag="a" key={sdk.name} href={sdk.href} className="group flex items-start gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                      <Box className="flex-1 min-w-0">
                        <Box className="flex items-center gap-2">
                          <Box tag="span" className="font-semibold text-sm">{sdk.name}</Box>
                          <ArrowUpRight style={css('h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors')} />
                        </Box>
                        <Box tag="code" className="text-xs text-muted-foreground">{sdk.install}</Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </div>
            </Box>
          )}

          {/* API Reference placeholder */}
          <Box tag="section" className="mb-12">
            <Box tag="h2" className="text-2xl font-bold mb-4">API Reference</Box>
            <Box className="p-8 rounded-2xl border border-border/50 bg-muted/30 text-center">
              <BookOpen style={css('h-12 w-12 mx-auto text-muted-foreground/30 mb-4')} />
              <Box tag="p" className="text-muted-foreground mb-4">
                Full API reference documentation is available at docs.lux.network.
              </Box>
              {chain.docsUrl && (
                <Box tag="a" href={chain.docsUrl} className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all text-sm">
                  View Full API Docs <ArrowUpRight style={css('h-4 w-4')} />
                </Box>
              )}
            </Box>
          </Box>

          {/* Prev/Next navigation */}
          <Box className="flex items-center justify-between pt-8 border-t border-border/50">
            {(() => {
              const idx = allChains.findIndex(c => c.id === chain.id)
              const prev = idx > 0 ? allChains[idx - 1] : null
              const next = idx < allChains.length - 1 ? allChains[idx + 1] : null
              return (
                <>
                  {prev ? (
                    <Link href={`/docs/${prev.id.toLowerCase()}`} className={'group flex items-center gap-3 hover:text-primary transition-colors'} style={css('group flex items-center gap-3 hover:text-primary transition-colors')}>
                      <ArrowLeft style={css('h-4 w-4')} />
                      <div>
                        <Box tag="span" className="text-xs text-muted-foreground">Previous</Box>
                        <Box tag="p" className="font-semibold text-sm">{prev.id}-Chain ({prev.name})</Box>
                      </div>
                    </Link>
                  ) : <div />}
                  {next ? (
                    <Link href={`/docs/${next.id.toLowerCase()}`} className={'group flex items-center gap-3 text-right hover:text-primary transition-colors'} style={css('group flex items-center gap-3 text-right hover:text-primary transition-colors')}>
                      <div>
                        <Box tag="span" className="text-xs text-muted-foreground">Next</Box>
                        <Box tag="p" className="font-semibold text-sm">{next.id}-Chain ({next.name})</Box>
                      </div>
                      <ArrowRight style={css('h-4 w-4')} />
                    </Link>
                  ) : <div />}
                </>
              )
            })()}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
