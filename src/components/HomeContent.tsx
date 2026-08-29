'use client'
import Link from 'next/link'
import { Box, css } from '@hanzo/ui'
import { Check, ArrowRight, Shield, Zap, Lock, Globe, Cpu, Database, Download, Smartphone, Wallet, CreditCard, Building, Vote, PiggyBank, Store, Cloud, KeyRound, ExternalLink, Eye, Users, Code, Layers, ArrowUpRight, Repeat, Search, Network, ShieldCheck, MonitorSmartphone, Banknote, BrainCircuit, Link2, Fingerprint, BarChart3, Radio, ScanEye, MessageSquare } from 'lucide-react'
import { Chrome } from '@hanzo/ui/brands'

import { Header, Footer } from '@luxfi/ui'

import { coreChains, defiChains, privacyChains, infraChains } from '@/data/chains'
import siteDef from '@/site-def'

/* ─────────────────────────── Data ─────────────────────────── */

const heroFeatures = [
  "14 specialized chains: P, X, C, D, T, Q, A, B, Z, G, K, O, R, I",
  "Sub-second finality, 4,500+ TPS per chain",
  "Post-Quantum Cryptography (ML-KEM, ML-DSA, SLH-DSA)",
  "ZK privacy, TFHE, MPC threshold signing",
  "AI compute attestation, decentralized oracles, DIDs",
  "Cross-chain bridge & relay with 200+ networks",
]

const stats = [
  { value: '4,500+', label: 'TPS per chain' },
  { value: '<1s', label: 'Finality' },
  { value: '14', label: 'Specialized chains' },
  { value: '99.9%', label: 'Uptime' },
]

const keyFeatures = [
  { icon: Code, title: 'EVM Compatible', desc: 'Deploy Solidity contracts with zero changes. Full EVM equivalence on C-Chain with all your favourite tools — Hardhat, Foundry, Remix, and Ethers.js.' },
  { icon: Layers, title: 'Millions of TPS', desc: 'L1 architecture enables unlimited horizontal scaling. Each L1 runs its own VM with dedicated throughput, adding capacity without bottlenecks.' },
  { icon: MonitorSmartphone, title: 'Integrated Apps', desc: 'Wallet, Exchange, Bridge, and Explorer ship natively. A complete user experience from day one — no third-party dependencies required.' },
  { icon: Banknote, title: 'Fiat Native', desc: 'On-ramp and off-ramp fiat currencies directly on-chain. Bank transfers, card payments, and stablecoin rails built into the protocol.' },
  { icon: Eye, title: 'Private DeFi', desc: 'Breakthrough privacy through ZChain and Fully Homomorphic Encryption. Trade, lend, and borrow without exposing your positions.' },
  { icon: ShieldCheck, title: '24/7 Security', desc: 'Round-the-clock monitoring with post-quantum cryptographic algorithms. NIST-approved lattice-based signatures protect every transaction.' },
  { icon: Network, title: 'Cross-Chain', desc: 'Native bridges connect Lux to Ethereum and beyond, moving assets across chains without third-party custodians.' },
  { icon: KeyRound, title: 'MPC Custody', desc: 'Enterprise multi-party-computation wallets with threshold signatures and no single point of failure, at mpc.lux.network.' },
  { icon: Users, title: 'DAO Governed', desc: 'Lux DAO puts protocol decisions in the hands of the community. Decentralized governance eliminates single points of failure.' },
]

const allChains = [...coreChains, ...defiChains, ...privacyChains, ...infraChains]

const techFeatures = [
  { icon: Shield, title: 'Post-Quantum Security', desc: 'NIST-approved ML-KEM, ML-DSA, and SLH-DSA lattice-based algorithms protect validators and transactions against quantum attacks.' },
  { icon: Lock, title: 'TFHE Privacy', desc: 'Fully Homomorphic Encryption enables confidential DeFi on T-Chain. Compute on encrypted data without ever decrypting it.' },
  { icon: KeyRound, title: 'MPC Wallets', desc: 'Enterprise Multi-Party Computation wallet infrastructure. Threshold signatures with no single point of failure at mpc.lux.network.' },
  { icon: Cloud, title: 'Lux Cloud', desc: 'Managed node infrastructure for validators and developers. One-click deployment at cloud.lux.network.' },
  { icon: Zap, title: 'Sub-Second Finality', desc: 'Quasar consensus with Flare finalization delivers 4,500+ TPS per chain with deterministic finality.' },
  { icon: Globe, title: 'Cross-Chain Native', desc: 'Warp carries assets and data between all fourteen chains as one network.' },
  { icon: Cpu, title: 'Native Precompiles', desc: 'DEX, threshold signatures, and ZK verification at the EVM level for maximum performance.' },
  { icon: Database, title: 'Infinite Scale', desc: 'L1 architecture allows unlimited horizontal scaling with custom VM configurations.' },
]

const apps = [
  {
    icon: Wallet,
    name: 'Lux Wallet',
    desc: 'Non-custodial, quantum-secure, multi-asset wallet covering all fourteen Lux chains. Manage LUX, ERC-20 tokens, NFTs, and L1 assets from a single interface. Built-in staking, dApp browser, and hardware wallet integration.',
    href: '#wallet',
    features: ['Post-quantum signatures', 'Multi-chain support', 'Hardware wallet integration', 'Built-in staking'],
  },
  {
    icon: Store,
    name: 'Lux Exchange',
    desc: 'Decentralized exchange with on-chain orderbook and concentrated liquidity AMM. Trade any asset trustlessly with zero MEV, deep liquidity, and sub-second settlement on D-Chain.',
    href: 'https://lux.exchange',
    features: ['On-chain orderbook', 'Concentrated liquidity', 'Zero MEV', 'Sub-second settlement'],
  },
  {
    icon: Repeat,
    name: 'Lux Bridge',
    desc: 'Cross-chain bridge with privacy-preserving transfers through ZChain integration. Move assets between Ethereum, Bitcoin, and 30+ networks with trustless verification and optional confidential transactions.',
    href: 'https://bridge.lux.network',
    features: ['30+ networks', 'Privacy transfers', 'Trustless verification', 'Fast finality'],
  },
  {
    icon: Search,
    name: 'Lux Explorer',
    desc: 'Full-featured block explorer and portfolio analytics platform. Track transactions across all fourteen chains, watch validator performance, read DeFi positions, and see network health as it happens.',
    href: 'https://explore.lux.network',
    features: ['Multi-chain tracking', 'Portfolio analytics', 'Validator metrics', 'Real-time data'],
  },
]

const ecosystem = [
  { icon: Wallet, name: 'Wallet', desc: 'Self-custody wallet & browser extension', href: '#wallet', color: 'from-foreground/[0.06]' },
  { icon: CreditCard, name: 'Credit', desc: 'Zero-interest crypto credit card', href: 'https://lux.credit', color: 'from-foreground/[0.06]' },
  { icon: Building, name: 'Finance', desc: 'Self-repaying loans with Liquid Protocol', href: 'https://lux.finance', color: 'from-foreground/[0.06]' },
  { icon: Store, name: 'Exchange', desc: 'Native DEX with orderbook & AMM', href: 'https://lux.exchange', color: 'from-foreground/[0.06]' },
  { icon: PiggyBank, name: 'Fund', desc: 'Institutional asset management', href: 'https://lux.fund', color: 'from-foreground/[0.06]' },
  { icon: Vote, name: 'Vote', desc: 'On-chain governance & DAO', href: 'https://lux.vote', color: 'from-foreground/[0.06]' },
]

const walletDownloads = [
  { icon: Chrome, name: 'Chrome Extension', desc: 'For Chrome, Brave, Edge', href: 'https://chrome.google.com/webstore/detail/lux-wallet', soon: true },
  { icon: Smartphone, name: 'Mobile App', desc: 'iOS & Android', href: '#', soon: true },
  { icon: Download, name: 'Desktop App', desc: 'macOS, Windows, Linux', href: '#', soon: true },
]

const devLinks = [
  { label: 'Docs', href: 'https://docs.lux.network', desc: 'Documentation & guides' },
  { label: 'Cloud', href: 'https://cloud.lux.network', desc: 'Managed node infrastructure' },
  { label: 'MPC', href: 'https://mpc.lux.network', desc: 'MPC wallet infrastructure' },
  { label: 'Explorer', href: 'https://explore.lux.network', desc: 'Block explorer' },
]

/* ─────────────────────────── Page ─────────────────────────── */

export default function HomeContent() {
  return (
    <>
      {/* Unified Lux header */}
      <Header siteDef={siteDef} logoVariant='full' />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <Box tag="section" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Animated gradient background */}
        <Box className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)]" />
        <Box className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <Box className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Box className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Content */}
            <Box className="order-2 lg:order-1 text-center lg:text-left">
              {/* Badge */}
              <Box className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-muted/50 text-sm mb-6">
                <Box tag="span" className="relative flex h-2 w-2">
                  <Box tag="span" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/60 opacity-75" />
                  <Box tag="span" className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
                </Box>
                Mainnet Live — Network ID 96369
              </Box>

              <Box tag="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                LUX NETWORK
              </Box>
              <Box tag="p" className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">
                Post-Quantum, Privacy-First
              </Box>
              <Box tag="p" className="text-lg sm:text-xl md:text-2xl mb-8">
                <Box tag="span" className="font-semibold">High-Performance DeFi</Box>
              </Box>

              <Box tag="ul" className="space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0">
                {heroFeatures.map((feature) => (
                  <Box tag="li" key={feature} className="flex items-start gap-3">
                    <Check style={css('h-5 w-5 text-foreground mt-0.5 flex-shrink-0')} />
                    <Box tag="span" className="text-sm sm:text-base text-foreground/90">{feature}</Box>
                  </Box>
                ))}
              </Box>

              {/* 3 buttons, 3 distinct styles */}
              <Box className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Box tag="a"
                  href="#run-the-network"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
                >
                  Run Chain
                  <ArrowRight style={css('h-4 w-4')} />
                </Box>
                <Box tag="a"
                  href="https://bridge.lux.network"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Bridge Assets
                  <ArrowUpRight style={css('h-4 w-4')} />
                </Box>
                <Box tag="a"
                  href="https://explore.lux.network"
                  className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
                >
                  Explore Network
                </Box>
              </Box>
            </Box>

            {/* Right: Video — natural aspect ratio (656x484 ≈ 4:3), no 16:9 crop */}
            <Box className="order-1 lg:order-2 flex justify-center items-center">
              <Box className="relative w-full max-w-md">
                <Box className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-3xl" />
                <Box className="relative rounded-2xl shadow-2xl bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-poster.jpg"
                    className="w-full h-auto block rounded-2xl"
                    style={{ aspectRatio: '656 / 484' }}
                  >
                    <source src="https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.mp4" type="video/mp4" />
                    <source src="https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.webm" type="video/webm" />
                  </video>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ STATS ══════════════════════ */}
      <Box tag="section" className="py-16 border-y border-border/50">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Box key={stat.label} className="text-center">
                <Box className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{stat.value}</Box>
                <Box className="text-muted-foreground text-sm sm:text-base">{stat.label}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ KEY FEATURES (9 cards) ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-16">
            <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Why Lux</Box>
            <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Everything You Need</Box>
            <Box tag="p" className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A multi-chain blockchain designed from the ground up for performance, privacy, and scale.
            </Box>
          </Box>

          <Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature) => (
              <Box
                key={feature.title}
                className="group p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Box className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </Box>
                <Box tag="h3" className="text-lg font-semibold mb-2">{feature.title}</Box>
                <Box tag="p" className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ 14 CHAINS ══════════════════════ */}
      <Box tag="section" id="run-the-network" className="py-20 sm:py-32 bg-muted/30">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-16">
            <Box tag="p" className="text-muted-foreground text-sm mb-2 tracking-widest">NETWORK ID: 96369</Box>
            <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">14 Specialized Chains</Box>
            <Box tag="p" className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every chain is purpose-built for a specific domain. Three core chains run on every node; eleven optional chains extend the network with DeFi, privacy, AI, and identity infrastructure.
            </Box>
          </Box>

          {[
            { label: 'Core Chains', items: coreChains, cols: 'sm:grid-cols-3' },
            { label: 'DeFi & Markets', items: defiChains, cols: 'sm:grid-cols-3' },
            { label: 'Privacy & Security', items: privacyChains, cols: 'sm:grid-cols-2 lg:grid-cols-4' },
            { label: 'Infrastructure', items: infraChains, cols: 'sm:grid-cols-2 lg:grid-cols-4' },
          ].map((group, gi) => (
            <Box key={group.label} className={gi < 3 ? 'mb-8' : ''}>
              <Box tag="h3" className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 px-1">{group.label}</Box>
              <Box className={`grid ${group.cols} gap-4`}>
                {group.items.map((chain) => (
                  <Link
                    key={chain.id}
                    href={`/chain/${chain.id}`}
                    className={`group relative p-5 rounded-2xl border border-border/50 bg-gradient-to-br ${chain.color} hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer`} style={css(`group relative p-5 rounded-2xl border border-border/50 bg-gradient-to-br ${chain.color} hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer`)}
                  >
                    <Box className="flex items-start gap-3">
                      <Box className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {chain.id}
                      </Box>
                      <Box className="flex-1 min-w-0">
                        <Box className="flex items-center gap-2 mb-1">
                          <Box tag="h4" className="text-base font-semibold">{chain.name}</Box>
                          <Box tag="span" className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-muted-foreground">{chain.consensus}</Box>
                        </Box>
                        <Box tag="p" className="text-muted-foreground text-xs leading-relaxed">{chain.desc}</Box>
                      </Box>
                    </Box>
                    <ArrowRight style={css('absolute top-5 right-5 h-4 w-4 text-muted-foreground/0 group-hover:text-primary/60 transition-all')} />
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ══════════════════════ DEVELOPER READY ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Developer Ready</Box>
              <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Full EVM Platform</Box>
              <Box tag="p" className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Lux C-Chain is fully EVM-compatible. Deploy any Solidity or Vyper smart contract with zero modifications. Use all the tools you already know — Hardhat, Foundry, Remix, Ethers.js, Wagmi, and Viem.
              </Box>
              <Box tag="p" className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Pre-built smart contracts, comprehensive SDKs, and native precompiles for DEX operations, threshold signatures, and ZK verification give you building blocks that don't exist on any other chain.
              </Box>
              <Box className="flex flex-col sm:flex-row gap-3">
                <Box tag="a" href="https://docs.lux.network" className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all">
                  Read the Docs <ArrowRight style={css('h-4 w-4')} />
                </Box>
                <Box tag="a" href="https://github.com/luxfi" className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors">
                  View on GitHub
                </Box>
              </Box>
            </div>
            <Box className="bg-card rounded-2xl border border-border p-6 font-mono text-sm overflow-hidden">
              <Box className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Box className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <Box className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <Box className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <Box tag="span" className="ml-2 text-xs">deploy.ts</Box>
              </Box>
              <Box tag="pre" className="text-foreground/90 leading-relaxed overflow-x-auto"><code>{`import { createWalletClient } from 'viem'
import { luxCChain } from 'viem/chains'

const client = createWalletClient({
  chain: luxCChain,
  transport: http('https://rpc.lux.network'),
})

// Deploy your contract
const hash = await client.deployContract({
  abi: myContractABI,
  bytecode: myContractBytecode,
  args: [/* constructor args */],
})

console.log('Deployed:', hash)`}</code></Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ PRIVATE DEFI ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32 bg-muted/30">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Box className="order-2 lg:order-1">
              <Box className="grid grid-cols-2 gap-4">
                <Box className="p-6 rounded-2xl bg-card border border-border/50">
                  <Lock style={css('h-8 w-8 text-primary mb-3')} />
                  <Box tag="h4" className="font-semibold mb-1">TFHE</Box>
                  <Box tag="p" className="text-muted-foreground text-xs">Compute on encrypted data without decryption</Box>
                </Box>
                <Box className="p-6 rounded-2xl bg-card border border-border/50">
                  <Eye style={css('h-8 w-8 text-primary mb-3')} />
                  <Box tag="h4" className="font-semibold mb-1">ZChain</Box>
                  <Box tag="p" className="text-muted-foreground text-xs">Zero-knowledge proof chain for privacy</Box>
                </Box>
                <Box className="p-6 rounded-2xl bg-card border border-border/50">
                  <KeyRound style={css('h-8 w-8 text-primary mb-3')} />
                  <Box tag="h4" className="font-semibold mb-1">MPC</Box>
                  <Box tag="p" className="text-muted-foreground text-xs">Threshold signatures without key exposure</Box>
                </Box>
                <Box className="p-6 rounded-2xl bg-card border border-border/50">
                  <Shield style={css('h-8 w-8 text-primary mb-3')} />
                  <Box tag="h4" className="font-semibold mb-1">Post-Quantum</Box>
                  <Box tag="p" className="text-muted-foreground text-xs">NIST-approved lattice cryptography</Box>
                </Box>
              </Box>
            </Box>
            <Box className="order-1 lg:order-2">
              <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Privacy First</Box>
              <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Finally, Private DeFi</Box>
              <Box tag="p" className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Breakthrough privacy technology through the T-Chain and ZChain integration. Trade, lend, borrow, and provide liquidity without exposing your positions, balances, or transaction history to the world.
              </Box>
              <Box tag="p" className="text-muted-foreground text-lg leading-relaxed">
                Fully Homomorphic Encryption (TFHE) allows smart contracts to compute on encrypted data without ever decrypting it. Combined with Multi-Party Computation wallets and zero-knowledge proofs, Lux delivers the most private DeFi experience available on any blockchain.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ TECHNOLOGY DEEP DIVE ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-16">
            <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Technology</Box>
            <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Built for the Future</Box>
            <Box tag="p" className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Enterprise-grade infrastructure with post-quantum security, privacy-preserving computation, and unlimited scalability.
            </Box>
          </Box>

          <Box className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature) => (
              <Box
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <Box tag="h3" className="text-lg font-semibold mb-2">{feature.title}</Box>
                <Box tag="p" className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ SECURITY ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32 bg-muted/30">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Security</Box>
              <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Peak Security</Box>
              <Box tag="p" className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Lux Network operates with the highest security standards in the industry. Post-quantum cryptographic algorithms protect every validator, transaction, and wallet from both classical and quantum computing attacks.
              </Box>
              <Box className="space-y-4">
                {[
                  { title: 'ML-KEM Key Encapsulation', desc: 'NIST-approved lattice-based key exchange resistant to quantum attacks' },
                  { title: 'ML-DSA Digital Signatures', desc: 'Module lattice signatures for validator attestations and transactions' },
                  { title: 'SLH-DSA Stateless Hashing', desc: 'Hash-based backup signatures providing defense in depth' },
                  { title: '24/7 Network Monitoring', desc: 'Real-time anomaly detection and automated threat response' },
                ].map((item) => (
                  <Box key={item.title} className="flex gap-4">
                    <Box className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <Box tag="p" className="font-semibold text-sm">{item.title}</Box>
                      <Box tag="p" className="text-muted-foreground text-sm">{item.desc}</Box>
                    </div>
                  </Box>
                ))}
              </Box>
            </div>
            <Box className="flex justify-center">
              <Box className="relative">
                <Box className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-foreground/5 rounded-3xl blur-3xl" />
                <Box className="relative p-12 rounded-3xl bg-card border border-border/50">
                  <Shield style={css('h-32 w-32 mx-auto text-primary/20')} />
                  <Box className="absolute inset-0 flex items-center justify-center">
                    <Box className="text-center">
                      <Box tag="p" className="text-4xl font-bold">PQC</Box>
                      <Box tag="p" className="text-muted-foreground text-sm">Post-Quantum</Box>
                      <Box tag="p" className="text-muted-foreground text-sm">Cryptography</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ ALL IN ONE PLACE ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-16">
            <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Integrated Platform</Box>
            <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">All in One Place</Box>
            <Box tag="p" className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Four integrated applications that cover every aspect of interacting with Lux Network. No third-party dependencies, no fragmented experiences.
            </Box>
          </Box>

          <Box className="grid md:grid-cols-2 gap-8">
            {apps.map((app) => (
              <Box tag="a"
                key={app.name}
                href={app.href}
                className="group relative p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                <Box className="flex items-start gap-4 mb-4">
                  <Box className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <app.icon className="h-7 w-7 text-primary" />
                  </Box>
                  <div>
                    <Box tag="h3" className="text-xl font-semibold mb-1">{app.name}</Box>
                    <Box tag="p" className="text-muted-foreground text-sm leading-relaxed">{app.desc}</Box>
                  </div>
                </Box>
                <Box className="flex flex-wrap gap-2">
                  {app.features.map((f) => (
                    <Box tag="span" key={f} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      {f}
                    </Box>
                  ))}
                </Box>
                <ArrowUpRight style={css('absolute top-8 right-8 h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors')} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ FIAT ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32 bg-muted/30">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="max-w-2xl mx-auto">
            {/* Fiat */}
            <div>
              <Box className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Banknote style={css('h-7 w-7 text-primary')} />
              </Box>
              <Box tag="h2" className="text-2xl sm:text-3xl font-bold mb-4">Fiat Accepted</Box>
              <Box tag="p" className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Lux Network supports native fiat on-ramps and off-ramps. Bank transfers, card payments, and stablecoin rails are built directly into the protocol, removing the friction between traditional finance and DeFi.
              </Box>
              <Box tag="ul" className="space-y-3">
                {['Bank transfer deposits', 'Credit & debit card payments', 'Stablecoin rails (USDC, USDT, DAI)', 'Multi-currency support (USD, EUR, GBP)'].map((item) => (
                  <Box tag="li" key={item} className="flex items-center gap-3 text-sm">
                    <Check style={css('h-4 w-4 text-foreground flex-shrink-0')} />
                    <Box tag="span" className="text-foreground/90">{item}</Box>
                  </Box>
                ))}
              </Box>
            </div>
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ DAO GOVERNANCE ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-16">
            <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Governance</Box>
            <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Distributed Power</Box>
            <Box tag="p" className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Lux DAO puts every major protocol decision in the hands of the community. No single entity controls the network. Validators, developers, and token holders collectively shape the future of Lux.
            </Box>
          </Box>

          <Box className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Vote, title: 'On-Chain Voting', desc: 'All governance proposals are submitted, debated, and voted on-chain with transparent tallying and execution.' },
              { icon: Users, title: 'Community Driven', desc: 'Any LUX holder can submit proposals. Voting power is proportional to stake, ensuring skin in the game.' },
              { icon: Network, title: 'No Single Point of Failure', desc: 'Decentralized decision-making eliminates the risks of centralized control, censorship, or unilateral changes.' },
            ].map((item) => (
              <Box key={item.title} className="p-6 rounded-2xl border border-border/50 text-center hover:border-primary/30 transition-all duration-300">
                <Box className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </Box>
                <Box tag="h3" className="text-lg font-semibold mb-2">{item.title}</Box>
                <Box tag="p" className="text-muted-foreground text-sm leading-relaxed">{item.desc}</Box>
              </Box>
            ))}
          </Box>

          <Box className="mt-12 text-center">
            <Box tag="a"
              href="https://lux.vote"
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all"
            >
              Go to Lux Vote <ArrowUpRight style={css('h-4 w-4')} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ ECOSYSTEM ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32 bg-muted/30">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-16">
            <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Products</Box>
            <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Lux Ecosystem</Box>
            <Box tag="p" className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A complete suite of financial products built on Lux Network
            </Box>
          </Box>

          <Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((app) => (
              <Box tag="a"
                key={app.name}
                href={app.href}
                className={`group relative p-6 rounded-2xl border border-border/50 bg-gradient-to-br ${app.color} to-transparent hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <app.icon className="h-10 w-10 mb-4 text-primary" />
                <Box tag="h3" className="text-lg font-semibold mb-2">Lux {app.name}</Box>
                <Box tag="p" className="text-muted-foreground text-sm">{app.desc}</Box>
                <ArrowRight style={css('absolute bottom-6 right-6 h-5 w-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all')} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ WALLET ══════════════════════ */}
      <Box tag="section" id="wallet" className="py-20 sm:py-32">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-16">
            <Box tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Lux Wallet</Box>
            <Box tag="p" className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Self-custody wallet with post-quantum security. Available on all platforms.
            </Box>
          </Box>

          <Box className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {walletDownloads.map((download) => (
              <Box
                key={download.name}
                className="relative p-6 rounded-2xl bg-card border border-border/50 text-center"
              >
                <download.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <Box tag="h3" className="text-lg font-semibold mb-1">{download.name}</Box>
                <Box tag="p" className="text-muted-foreground text-sm mb-4">{download.desc}</Box>
                {download.soon ? (
                  <Box tag="span" className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Coming Soon
                  </Box>
                ) : (
                  <Box tag="a" href={download.href} className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm">
                    Download
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Box className="mt-12 text-center">
            <Box tag="p" className="text-muted-foreground mb-4">Or connect with your existing wallet</Box>
            <Box className="flex flex-wrap justify-center gap-4">
              {['MetaMask', 'WalletConnect', 'Coinbase Wallet', 'Rabby'].map((name) => (
                <Box tag="span" key={name} className="px-4 py-2 rounded-lg bg-card border border-border/50 text-sm">{name}</Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ DEVELOPER CTA ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32 bg-muted/30">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 sm:p-12 lg:p-16 overflow-hidden">
            <Box className="relative z-10 max-w-3xl">
              <Box tag="p" className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Build on Lux</Box>
              <Box tag="h2" className="text-3xl sm:text-4xl font-bold mb-4">Start Building Today</Box>
              <Box tag="p" className="text-muted-foreground mb-8 text-lg">
                Deploy smart contracts, run a validator, or build cross-chain applications on the most advanced L1 blockchain. Comprehensive documentation, SDKs in every language, and a growing ecosystem of tools await.
              </Box>

              <Box className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {devLinks.map((link) => (
                  <Box tag="a"
                    key={link.label}
                    href={link.href}
                    className="group flex flex-col p-4 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-all cursor-pointer"
                  >
                    <Box tag="span" className="font-semibold mb-1 flex items-center gap-1.5">
                      {link.label}
                      <ExternalLink style={css('h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors')} />
                    </Box>
                    <Box tag="span" className="text-muted-foreground text-xs">{link.desc}</Box>
                  </Box>
                ))}
              </Box>

              <Box className="flex flex-col sm:flex-row gap-4">
                <Box tag="a" href="https://docs.lux.network" className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all">
                  Read the Docs
                  <ArrowRight style={css('h-4 w-4')} />
                </Box>
                <Box tag="a" href="https://github.com/luxfi" className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors">
                  View on GitHub
                </Box>
              </Box>
            </Box>
            <Box className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </Box>
        </Box>
      </Box>

      {/* ══════════════════════ NETWORK CONFIG ══════════════════════ */}
      <Box tag="section" className="py-20 sm:py-32">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-16">
            <Box tag="h2" className="text-3xl sm:text-4xl font-bold mb-4">Network Configuration</Box>
            <Box tag="p" className="text-muted-foreground">Add Lux Network to your wallet</Box>
          </Box>

          <Box className="max-w-2xl mx-auto">
            <Box className="bg-card rounded-2xl border border-border p-6 sm:p-8">
              <Box className="space-y-4 font-mono text-sm">
                {[
                  { label: 'Network Name', value: 'Lux Network' },
                  { label: 'Chain ID', value: '96369' },
                  { label: 'RPC URL', value: 'https://rpc.lux.network', highlight: true },
                  { label: 'WebSocket', value: 'wss://ws.lux.network', highlight: true },
                  { label: 'Symbol', value: 'LUX' },
                  { label: 'Explorer', value: 'explore.lux.network' },
                ].map((row, i, arr) => (
                  <Box key={row.label} className={`flex justify-between py-2 ${i < arr.length - 1 ? 'border-b border-border/50' : ''}`}>
                    <Box tag="span" className="text-muted-foreground">{row.label}</Box>
                    <Box tag="span" className={`font-semibold ${row.highlight ? 'text-accent' : ''}`}>{row.value}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Unified Lux footer */}
      <Footer siteDef={siteDef} className="w-full pt-16 lg:mx-auto" />
    </>
  )
}
