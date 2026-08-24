'use client'
import Link from 'next/link'
import {
  Check, ArrowRight, Shield, Zap, Lock, Globe, Cpu, Database,
  Download, Chrome, Smartphone, Wallet, CreditCard, Building,
  Vote, PiggyBank, Store, Cloud, KeyRound, ExternalLink,
  Eye, Scale, Landmark, Users, Code, Layers,
  ArrowUpRight, Repeat, Search, Network,
  ShieldCheck, MonitorSmartphone, Banknote, Gavel,
  BrainCircuit, Link2, Fingerprint, BarChart3,
  Radio, ScanEye, MessageSquare
} from 'lucide-react'

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
  { icon: Gavel, title: 'Regulated from Day 1', desc: 'Built within the Isle of Man regulatory framework. Full compliance infrastructure so institutions can participate with confidence.' },
  { icon: Scale, title: '0% Capital Gains', desc: 'Operate from one of the world\'s most tax-efficient jurisdictions. Zero capital gains tax for qualifying digital assets.' },
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
      <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-muted/50 text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/60 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
                </span>
                Mainnet Live — Network ID 96369
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                LUX NETWORK
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">
                Post-Quantum, Privacy-First
              </p>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">
                <span className="font-semibold">High-Performance DeFi</span>
              </p>

              <ul className="space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0">
                {heroFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* 3 buttons, 3 distinct styles */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#run-the-network"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
                >
                  Run Chain
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://bridge.lux.network"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Bridge Assets
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://explore.lux.network"
                  className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
                >
                  Explore Network
                </a>
              </div>
            </div>

            {/* Right: Video — natural aspect ratio (656x484 ≈ 4:3), no 16:9 crop */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl shadow-2xl bg-black">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ STATS ══════════════════════ */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ KEY FEATURES (9 cards) ══════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Why Lux</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A multi-chain blockchain designed from the ground up for performance, privacy, and regulatory compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ 14 CHAINS ══════════════════════ */}
      <section id="run-the-network" className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm mb-2 tracking-widest">NETWORK ID: 96369</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">14 Specialized Chains</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every chain is purpose-built for a specific domain. Three core chains run on every node; eleven optional chains extend the network with DeFi, privacy, AI, and identity infrastructure.
            </p>
          </div>

          {[
            { label: 'Core Chains', items: coreChains, cols: 'sm:grid-cols-3' },
            { label: 'DeFi & Markets', items: defiChains, cols: 'sm:grid-cols-3' },
            { label: 'Privacy & Security', items: privacyChains, cols: 'sm:grid-cols-2 lg:grid-cols-4' },
            { label: 'Infrastructure', items: infraChains, cols: 'sm:grid-cols-2 lg:grid-cols-4' },
          ].map((group, gi) => (
            <div key={group.label} className={gi < 3 ? 'mb-8' : ''}>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 px-1">{group.label}</h3>
              <div className={`grid ${group.cols} gap-4`}>
                {group.items.map((chain) => (
                  <Link
                    key={chain.id}
                    href={`/chain/${chain.id}`}
                    className={`group relative p-5 rounded-2xl border border-border/50 bg-gradient-to-br ${chain.color} hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {chain.id}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-semibold">{chain.name}</h4>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-muted-foreground">{chain.consensus}</span>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">{chain.desc}</p>
                      </div>
                    </div>
                    <ArrowRight className="absolute top-5 right-5 h-4 w-4 text-muted-foreground/0 group-hover:text-primary/60 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════ DEVELOPER READY ══════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Developer Ready</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Full EVM Platform</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Lux C-Chain is fully EVM-compatible. Deploy any Solidity or Vyper smart contract with zero modifications. Use all the tools you already know — Hardhat, Foundry, Remix, Ethers.js, Wagmi, and Viem.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Pre-built smart contracts, comprehensive SDKs, and native precompiles for DEX operations, threshold signatures, and ZK verification give you building blocks that don't exist on any other chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://docs.lux.network" className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all">
                  Read the Docs <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://github.com/luxfi" className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors">
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="ml-2 text-xs">deploy.ts</span>
              </div>
              <pre className="text-foreground/90 leading-relaxed overflow-x-auto"><code>{`import { createWalletClient } from 'viem'
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

console.log('Deployed:', hash)`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PRIVATE DEFI ══════════════════════ */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <Lock className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">TFHE</h4>
                  <p className="text-muted-foreground text-xs">Compute on encrypted data without decryption</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <Eye className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">ZChain</h4>
                  <p className="text-muted-foreground text-xs">Zero-knowledge proof chain for privacy</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <KeyRound className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">MPC</h4>
                  <p className="text-muted-foreground text-xs">Threshold signatures without key exposure</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Post-Quantum</h4>
                  <p className="text-muted-foreground text-xs">NIST-approved lattice cryptography</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Privacy First</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Finally, Private DeFi</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Breakthrough privacy technology through the T-Chain and ZChain integration. Trade, lend, borrow, and provide liquidity without exposing your positions, balances, or transaction history to the world.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fully Homomorphic Encryption (TFHE) allows smart contracts to compute on encrypted data without ever decrypting it. Combined with Multi-Party Computation wallets and zero-knowledge proofs, Lux delivers the most private DeFi experience available on any blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ TECHNOLOGY DEEP DIVE ══════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Technology</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Built for the Future</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Enterprise-grade infrastructure with post-quantum security, privacy-preserving computation, and unlimited scalability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SECURITY ══════════════════════ */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Security</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Peak Security</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Lux Network operates with the highest security standards in the industry. Post-quantum cryptographic algorithms protect every validator, transaction, and wallet from both classical and quantum computing attacks.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'ML-KEM Key Encapsulation', desc: 'NIST-approved lattice-based key exchange resistant to quantum attacks' },
                  { title: 'ML-DSA Digital Signatures', desc: 'Module lattice signatures for validator attestations and transactions' },
                  { title: 'SLH-DSA Stateless Hashing', desc: 'Hash-based backup signatures providing defense in depth' },
                  { title: '24/7 Network Monitoring', desc: 'Real-time anomaly detection and automated threat response' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-foreground/5 rounded-3xl blur-3xl" />
                <div className="relative p-12 rounded-3xl bg-card border border-border/50">
                  <Shield className="h-32 w-32 mx-auto text-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-bold">PQC</p>
                      <p className="text-muted-foreground text-sm">Post-Quantum</p>
                      <p className="text-muted-foreground text-sm">Cryptography</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ ALL IN ONE PLACE ══════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Integrated Platform</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">All in One Place</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Four integrated applications that cover every aspect of interacting with Lux Network. No third-party dependencies, no fragmented experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.href}
                className="group relative p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <app.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{app.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {app.features.map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      {f}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FIAT + COMPLIANCE ══════════════════════ */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Fiat */}
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Banknote className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Fiat Accepted</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Lux Network supports native fiat on-ramps and off-ramps. Bank transfers, card payments, and stablecoin rails are built directly into the protocol, removing the friction between traditional finance and DeFi.
              </p>
              <ul className="space-y-3">
                {['Bank transfer deposits', 'Credit & debit card payments', 'Stablecoin rails (USDC, USDT, DAI)', 'Multi-currency support (USD, EUR, GBP)'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-foreground flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Landmark className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Regulatory Compliance</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Built within the Isle of Man regulatory framework from day one. Institutions, funds, and enterprises can participate with full confidence in a jurisdiction known for progressive digital asset legislation and 0% capital gains tax on qualifying assets.
              </p>
              <ul className="space-y-3">
                {['Isle of Man regulatory framework', '0% capital gains tax on digital assets', 'KYC/AML compliance infrastructure', 'Institutional-grade custody solutions'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-foreground flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ DAO GOVERNANCE ══════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Governance</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Distributed Power</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Lux DAO puts every major protocol decision in the hands of the community. No single entity controls the network. Validators, developers, and token holders collectively shape the future of Lux.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Vote, title: 'On-Chain Voting', desc: 'All governance proposals are submitted, debated, and voted on-chain with transparent tallying and execution.' },
              { icon: Users, title: 'Community Driven', desc: 'Any LUX holder can submit proposals. Voting power is proportional to stake, ensuring skin in the game.' },
              { icon: Network, title: 'No Single Point of Failure', desc: 'Decentralized decision-making eliminates the risks of centralized control, censorship, or unilateral changes.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-border/50 text-center hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://lux.vote"
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all"
            >
              Go to Lux Vote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════ ECOSYSTEM ══════════════════════ */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Products</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Lux Ecosystem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A complete suite of financial products built on Lux Network
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((app) => (
              <a
                key={app.name}
                href={app.href}
                className={`group relative p-6 rounded-2xl border border-border/50 bg-gradient-to-br ${app.color} to-transparent hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <app.icon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Lux {app.name}</h3>
                <p className="text-muted-foreground text-sm">{app.desc}</p>
                <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WALLET ══════════════════════ */}
      <section id="wallet" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Lux Wallet</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Self-custody wallet with post-quantum security. Available on all platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {walletDownloads.map((download) => (
              <div
                key={download.name}
                className="relative p-6 rounded-2xl bg-card border border-border/50 text-center"
              >
                <download.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-1">{download.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{download.desc}</p>
                {download.soon ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Coming Soon
                  </span>
                ) : (
                  <a href={download.href} className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm">
                    Download
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or connect with your existing wallet</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['MetaMask', 'WalletConnect', 'Coinbase Wallet', 'Rabby'].map((name) => (
                <span key={name} className="px-4 py-2 rounded-lg bg-card border border-border/50 text-sm">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ DEVELOPER CTA ══════════════════════ */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">Build on Lux</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Building Today</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Deploy smart contracts, run a validator, or build cross-chain applications on the most advanced L1 blockchain. Comprehensive documentation, SDKs in every language, and a growing ecosystem of tools await.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {devLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex flex-col p-4 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-all cursor-pointer"
                  >
                    <span className="font-semibold mb-1 flex items-center gap-1.5">
                      {link.label}
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </span>
                    <span className="text-muted-foreground text-xs">{link.desc}</span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://docs.lux.network" className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all">
                  Read the Docs
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://github.com/luxfi" className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors">
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* ══════════════════════ NETWORK CONFIG ══════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Network Configuration</h2>
            <p className="text-muted-foreground">Add Lux Network to your wallet</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
              <div className="space-y-4 font-mono text-sm">
                {[
                  { label: 'Network Name', value: 'Lux Network' },
                  { label: 'Chain ID', value: '96369' },
                  { label: 'RPC URL', value: 'https://rpc.lux.network', highlight: true },
                  { label: 'WebSocket', value: 'wss://ws.lux.network', highlight: true },
                  { label: 'Symbol', value: 'LUX' },
                  { label: 'Explorer', value: 'explore.lux.network' },
                ].map((row, i, arr) => (
                  <div key={row.label} className={`flex justify-between py-2 ${i < arr.length - 1 ? 'border-b border-border/50' : ''}`}>
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className={`font-semibold ${row.highlight ? 'text-accent' : ''}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Lux footer */}
      <Footer siteDef={siteDef} className="w-full pt-16 lg:mx-auto" />
    </>
  )
}
