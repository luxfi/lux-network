'use client'

import { useParams } from 'next/navigation'
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Documentation Not Found</h1>
          <p className="text-muted-foreground mb-8">No documentation for chain &quot;{params.chain}&quot;</p>
          <Link href="/docs" className="text-primary hover:underline">Back to Docs</Link>
        </div>
      </div>
    )
  }

  const allChains = [...coreChains, ...defiChains, ...privacyChains, ...infraChains]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-border/50 sticky top-0 h-screen overflow-y-auto py-8 px-4">
        <Logo size='md' variant='full' href='/' outerClx='mb-8 px-3' />

        <nav className="space-y-6">
          {[
            { label: 'Core Chains', chains: coreChains },
            { label: 'DeFi Chains', chains: defiChains },
            { label: 'Privacy Chains', chains: privacyChains },
            { label: 'Infrastructure', chains: infraChains },
          ].map(group => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground px-3 mb-2">{group.label}</h3>
              <ul className="space-y-0.5">
                {group.chains.map(c => (
                  <li key={c.id}>
                    <Link
                      href={`/docs/${c.id.toLowerCase()}`}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        c.id === chain.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <span className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs font-bold">{c.id}</span>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border/50 bg-background/90 backdrop-blur-xl px-6">
          <div className="flex items-center gap-4">
            <Logo size='sm' variant='full' href='/' outerClx='lg:hidden' />
            <span className="text-sm text-muted-foreground">Documentation</span>
          </div>
          <div className="flex items-center gap-3">
            {chain.githubUrl && (
              <a href={chain.githubUrl} className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <span>/</span>
            <span className="text-foreground">{chain.id}-Chain ({chain.name})</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">{chain.fullName}</h1>
          <p className="text-lg text-muted-foreground mb-8">{chain.desc}</p>

          {/* Quick links */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Link href={`/chain/${chain.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm hover:bg-muted/80 transition-colors">
              <Layers className="h-3.5 w-3.5" /> Chain Overview
            </Link>
            {chain.explorerUrl && (
              <a href={chain.explorerUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm hover:bg-muted/80 transition-colors">
                <ExternalLink className="h-3.5 w-3.5" /> Explorer
              </a>
            )}
            {chain.githubUrl && (
              <a href={chain.githubUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm hover:bg-muted/80 transition-colors">
                <Github className="h-3.5 w-3.5" /> Source
              </a>
            )}
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            {chain.longDesc.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
            ))}
          </section>

          {/* Technical Specs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
            <div className="rounded-2xl border border-border/50 overflow-hidden">
              {chain.specs.map((spec, i) => (
                <div key={spec.label} className={`flex items-center justify-between px-5 py-3.5 ${i > 0 ? 'border-t border-border/50' : ''}`}>
                  <span className="text-muted-foreground text-sm">{spec.label}</span>
                  <code className="text-sm font-mono bg-muted px-2 py-0.5 rounded">{spec.value}</code>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {chain.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-4 rounded-xl border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Start */}
          {chain.sdkExample && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-2">Quick Start</h2>
              <p className="text-muted-foreground mb-4">Install the Lux SDK and start interacting with {chain.name} Chain.</p>

              {/* Install */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="h-4 w-4" /> Installation
                </h3>
                <div className="bg-card rounded-xl border border-border p-4 font-mono text-sm">
                  <code className="text-foreground/90">npm install luxnet</code>
                </div>
              </div>

              {/* Example */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Code className="h-4 w-4" /> Example
                </h3>
                <div className="bg-card rounded-xl border border-border p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-foreground/90 leading-relaxed"><code>{chain.sdkExample}</code></pre>
                </div>
              </div>

              {/* SDK Links */}
              <div>
                <h3 className="text-sm font-semibold mb-3">SDKs & Libraries</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: 'JavaScript SDK', pkg: 'luxnet', href: 'https://www.npmjs.com/package/luxnet', install: 'npm i luxnet' },
                    { name: 'Go SDK', pkg: 'github.com/luxfi/sdk', href: 'https://github.com/luxfi/sdk', install: 'go get github.com/luxfi/sdk' },
                    { name: 'Smart Contracts', pkg: '@luxfi/contracts', href: 'https://www.npmjs.com/package/@luxfi/contracts', install: 'npm i @luxfi/contracts' },
                    { name: 'Wallet SDK', pkg: '@luxfi/wallet-sdk', href: 'https://github.com/luxfi/wallet', install: 'npm i @luxfi/wallet-sdk' },
                  ].map(sdk => (
                    <a key={sdk.name} href={sdk.href} className="group flex items-start gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{sdk.name}</span>
                          <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <code className="text-xs text-muted-foreground">{sdk.install}</code>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* API Reference placeholder */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">API Reference</h2>
            <div className="p-8 rounded-2xl border border-border/50 bg-muted/30 text-center">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground mb-4">
                Full API reference documentation is available at docs.lux.network.
              </p>
              {chain.docsUrl && (
                <a href={chain.docsUrl} className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all text-sm">
                  View Full API Docs <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </section>

          {/* Prev/Next navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-border/50">
            {(() => {
              const idx = allChains.findIndex(c => c.id === chain.id)
              const prev = idx > 0 ? allChains[idx - 1] : null
              const next = idx < allChains.length - 1 ? allChains[idx + 1] : null
              return (
                <>
                  {prev ? (
                    <Link href={`/docs/${prev.id.toLowerCase()}`} className="group flex items-center gap-3 hover:text-primary transition-colors">
                      <ArrowLeft className="h-4 w-4" />
                      <div>
                        <span className="text-xs text-muted-foreground">Previous</span>
                        <p className="font-semibold text-sm">{prev.id}-Chain ({prev.name})</p>
                      </div>
                    </Link>
                  ) : <div />}
                  {next ? (
                    <Link href={`/docs/${next.id.toLowerCase()}`} className="group flex items-center gap-3 text-right hover:text-primary transition-colors">
                      <div>
                        <span className="text-xs text-muted-foreground">Next</span>
                        <p className="font-semibold text-sm">{next.id}-Chain ({next.name})</p>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : <div />}
                </>
              )
            })()}
          </div>
        </div>
      </main>
    </div>
  )
}
