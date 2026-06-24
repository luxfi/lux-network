export interface ChainInfo {
  id: string
  name: string
  fullName: string
  desc: string
  longDesc: string
  color: string
  consensus: 'Linear' | 'DAG'
  category: 'core' | 'defi' | 'privacy' | 'infra'
  categoryLabel: string
  vmId?: string
  features: string[]
  specs: { label: string; value: string }[]
  sdkExample?: string
  explorerUrl?: string
  docsUrl?: string
  githubUrl?: string
}

export const chains: ChainInfo[] = [
  // ── Core ──
  {
    id: 'P',
    name: 'Platform',
    fullName: 'P-Chain (Platform)',
    desc: 'Validator staking, L1 management, and network governance. The coordination backbone of Lux Network. Manages the lifecycle of all other chains.',
    longDesc: `The Platform Chain is the metadata blockchain on Lux Network. It coordinates validators, tracks active L1s, and enables the creation of new blockchains. All staking operations — delegating, adding validators, creating L1s — happen on the P-Chain.

The P-Chain implements the Quasar consensus protocol for linear chain ordering and provides the security backbone for the entire network. Every node on Lux Network validates the P-Chain, making it the most decentralized and secure chain in the ecosystem.

Key capabilities include validator set management with configurable staking parameters, L1 creation with custom VM configurations, cross-chain atomic transfers via shared memory, and reward distribution for validators and delegators.`,
    color: 'from-blue-500/20 to-blue-600/5',
    consensus: 'Linear',
    category: 'core',
    categoryLabel: 'Core Chain',
    features: [
      'Validator staking with configurable lock periods',
      'L1 creation and management',
      'Cross-chain atomic transfers',
      'Reward distribution engine',
      'Network governance parameters',
      'Dynamic validator set rotation',
    ],
    specs: [
      { label: 'Consensus', value: 'Quasar (Linear)' },
      { label: 'Block Time', value: '~2 seconds' },
      { label: 'Finality', value: 'Sub-second' },
      { label: 'Min Stake', value: '2,000 LUX' },
      { label: 'Max Validators', value: 'Unlimited' },
      { label: 'Chain Type', value: 'Required (all nodes)' },
    ],
    sdkExample: `import { Lux } from 'luxnet'

const lux = new Lux('api.lux.network', 443, 'https')
const pchain = lux.PChain()

// Get current validators
const validators = await pchain.getCurrentValidators()
console.log(\`Active validators: \${validators.validators.length}\`)

// Add a delegator
const tx = await pchain.addDelegator(
  nodeID,
  startTime,
  endTime,
  stakeAmount,
  rewardAddress
)`,
    explorerUrl: 'https://explore.lux.network/p-chain',
    docsUrl: 'https://docs.lux.network/apis/pchain',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/platformvm',
  },
  {
    id: 'X',
    name: 'Exchange',
    fullName: 'X-Chain (Exchange)',
    desc: 'High-speed asset creation and transfers using a DAG-based UTXO model. Multi-asset support with atomic swaps, optimized for maximum throughput.',
    longDesc: `The Exchange Chain is Lux Network's DAG-based asset platform. It uses a UTXO model for maximum parallelism — transactions that don't conflict can be processed simultaneously, enabling throughput that scales with network capacity.

Unlike account-based chains, the X-Chain's UTXO model provides inherent privacy benefits and enables atomic multi-asset transfers in a single transaction. Assets created on the X-Chain can represent anything: tokens, NFTs, stablecoins, or custom digital instruments.

The DAG consensus allows transactions to be confirmed without waiting for blocks, achieving sub-second finality for simple transfers. Complex operations involving multiple UTXOs are batched efficiently.`,
    color: 'from-purple-500/20 to-purple-600/5',
    consensus: 'DAG',
    category: 'core',
    categoryLabel: 'Core Chain',
    features: [
      'DAG-based UTXO model for parallel processing',
      'Native multi-asset creation and transfer',
      'Atomic cross-chain swaps',
      'Sub-second transaction finality',
      'Variable transaction fees',
      'NFT and collectible support',
    ],
    specs: [
      { label: 'Consensus', value: 'Quasar (DAG)' },
      { label: 'Model', value: 'UTXO' },
      { label: 'Finality', value: '<1 second' },
      { label: 'TPS', value: '4,500+' },
      { label: 'Asset Types', value: 'Fungible, NFT, Variable-cap' },
      { label: 'Chain Type', value: 'Required (all nodes)' },
    ],
    sdkExample: `import { Lux, BN } from 'luxnet'

const lux = new Lux('api.lux.network', 443, 'https')
const xchain = lux.XChain()

// Create a new asset
const tx = await xchain.createFixedCapAsset(
  'MyToken',     // name
  'MTK',         // symbol
  0,             // denomination
  [{ address: myAddress, amount: new BN(1000000) }]
)`,
    explorerUrl: 'https://explore.lux.network/x-chain',
    docsUrl: 'https://docs.lux.network/apis/xchain',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/avm',
  },
  {
    id: 'C',
    name: 'Contract',
    fullName: 'C-Chain (Contract)',
    desc: 'Full EVM-compatible smart contract platform. Deploy Solidity, Vyper, or any EVM bytecode. Dynamic gas pricing (LP-176) and native precompiles.',
    longDesc: `The Contract Chain is a full EVM-compatible blockchain that runs all Ethereum tooling out of the box — Hardhat, Foundry, Remix, Ethers.js, Wagmi, and Viem all work without modification.

What sets C-Chain apart from other EVM chains is its native precompiles: DEX operations, threshold signatures, and ZK verification are available at the EVM level for maximum gas efficiency. The dynamic gas pricing model (LP-176) adjusts fees based on network load, preventing fee spikes during congestion.

C-Chain benefits from the same Quasar consensus that powers the rest of Lux Network, delivering sub-second finality with deterministic confirmation. No more waiting 12+ seconds for a block.`,
    color: 'from-emerald-500/20 to-emerald-600/5',
    consensus: 'Linear',
    category: 'core',
    categoryLabel: 'Core Chain',
    features: [
      'Full EVM equivalence (Solidity, Vyper, Yul)',
      'Native DEX precompiles',
      'Threshold signature precompiles',
      'ZK verification precompiles',
      'Dynamic gas pricing (LP-176)',
      'Sub-second finality',
    ],
    specs: [
      { label: 'Consensus', value: 'Quasar (Linear)' },
      { label: 'VM', value: 'EVM (geth fork)' },
      { label: 'Block Time', value: '~2 seconds' },
      { label: 'Finality', value: 'Sub-second' },
      { label: 'Gas Model', value: 'Dynamic (LP-176)' },
      { label: 'Chain ID', value: '96369' },
    ],
    sdkExample: `import { createWalletClient, http } from 'viem'
import { luxCChain } from 'viem/chains'

const client = createWalletClient({
  chain: luxCChain,
  transport: http('https://rpc.lux.network'),
})

// Deploy a contract
const hash = await client.deployContract({
  abi: myContractABI,
  bytecode: myContractBytecode,
  args: [/* constructor args */],
})`,
    explorerUrl: 'https://explore.lux.network',
    docsUrl: 'https://docs.lux.network/apis/cchain',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/evm',
  },

  // ── DeFi ──
  {
    id: 'D',
    name: 'DEX',
    fullName: 'D-Chain (DEX)',
    desc: 'Central limit order book, concentrated liquidity AMM, and perpetual futures. 200ms block times, cross-chain atomic swaps, and MEV protection by design.',
    longDesc: `The DEX Chain is a purpose-built blockchain for decentralized exchange operations. It combines a central limit order book (CLOB) with concentrated liquidity AMM pools and perpetual futures — all on a single chain with 200ms block times.

MEV protection is built into the consensus layer, not bolted on as an afterthought. Transaction ordering is fair by design, preventing front-running and sandwich attacks that plague other DEX platforms.

Cross-chain atomic swaps allow trustless trading between assets on any Lux chain without bridges or wrapped tokens. The matching engine runs as a native precompile for maximum throughput.`,
    color: 'from-amber-500/20 to-amber-600/5',
    consensus: 'Linear',
    category: 'defi',
    categoryLabel: 'DeFi Chain',
    features: [
      'Central limit order book (CLOB)',
      'Concentrated liquidity AMM',
      'Perpetual futures',
      'MEV protection at consensus level',
      'Cross-chain atomic swaps',
      '200ms block times',
    ],
    specs: [
      { label: 'Block Time', value: '200ms' },
      { label: 'Order Types', value: 'Limit, Market, Stop, IOC' },
      { label: 'Settlement', value: 'Atomic (same block)' },
      { label: 'MEV Protection', value: 'Consensus-level' },
      { label: 'Matching Engine', value: 'Native precompile' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { DexClient } from 'luxnet/dex'

const dex = new DexClient('https://dex.lux.network')

// Place a limit order
const order = await dex.placeLimitOrder({
  pair: 'LUX/USDC',
  side: 'buy',
  price: '42.50',
  amount: '100',
})`,
    explorerUrl: 'https://explore.lux.network/d-chain',
    docsUrl: 'https://docs.lux.network/apis/dchain',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/dexvm',
  },
  {
    id: 'B',
    name: 'Bridge',
    fullName: 'B-Chain (Bridge)',
    desc: 'Cross-chain asset bridge with MPC threshold signing across 200+ external networks. LP-333 signer set management with 100M LUX slashable bonds.',
    longDesc: `The Bridge Chain connects Lux Network to 200+ external blockchains through MPC threshold signing. Unlike centralized bridges, the B-Chain distributes signing authority across a decentralized set of validators with 100M LUX in slashable bonds (LP-333).

Bridge operations are verified by multiple independent parties before execution. The threshold signing scheme means no single party can move funds — a configurable quorum must agree on every cross-chain transfer.

Supported networks include Ethereum, Bitcoin, Solana, Cosmos, Polkadot, and 200+ others. New chains can be added through governance proposals without protocol upgrades.`,
    color: 'from-orange-500/20 to-orange-600/5',
    consensus: 'Linear',
    category: 'defi',
    categoryLabel: 'DeFi Chain',
    features: [
      '200+ external network connections',
      'MPC threshold signing',
      '100M LUX slashable bonds',
      'LP-333 signer set management',
      'Trustless verification',
      'Governance-controlled chain additions',
    ],
    specs: [
      { label: 'Networks', value: '200+' },
      { label: 'Signing', value: 'MPC Threshold (t-of-n)' },
      { label: 'Bond', value: '100M LUX (slashable)' },
      { label: 'Verification', value: 'Multi-party' },
      { label: 'Settlement', value: '~30 seconds' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { BridgeClient } from 'luxnet/bridge'

const bridge = new BridgeClient('https://bridge.lux.network')

// Bridge ETH from Ethereum to Lux
const tx = await bridge.transfer({
  sourceChain: 'ethereum',
  destChain: 'lux-c',
  asset: 'ETH',
  amount: '1.5',
  recipient: '0x...',
})`,
    explorerUrl: 'https://bridge.lux.network',
    docsUrl: 'https://docs.lux.network/apis/bridge',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/bridgevm',
  },
  {
    id: 'O',
    name: 'Oracle',
    fullName: 'O-Chain (Oracle)',
    desc: 'Decentralized oracle with observe-commit-aggregate pipeline. Median, TWAP, and weighted aggregation with ZK proofs and quorum certificate attestation.',
    longDesc: `The Oracle Chain provides decentralized price feeds and external data to all Lux chains through a three-phase pipeline: observe, commit, and aggregate.

Data providers submit observations that are committed on-chain and aggregated using configurable strategies — median, TWAP, or weighted averages. ZK proofs ensure data integrity, and quorum certificates attest to the validity of each aggregation round.

Unlike off-chain oracle networks, the O-Chain runs as a native Lux blockchain, inheriting the same security guarantees and finality properties as all other chains in the network.`,
    color: 'from-yellow-500/20 to-yellow-600/5',
    consensus: 'Linear',
    category: 'defi',
    categoryLabel: 'DeFi Chain',
    features: [
      'Observe-commit-aggregate pipeline',
      'Median, TWAP, weighted aggregation',
      'ZK proof verification',
      'Quorum certificate attestation',
      'Cross-chain data delivery',
      'Configurable update frequency',
    ],
    specs: [
      { label: 'Pipeline', value: 'Observe → Commit → Aggregate' },
      { label: 'Aggregation', value: 'Median, TWAP, Weighted' },
      { label: 'Proofs', value: 'ZK (Groth16/PLONK)' },
      { label: 'Update Freq', value: 'Configurable (1s–1hr)' },
      { label: 'Data Types', value: 'Price, Random, Custom' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { OracleClient } from 'luxnet/oracle'

const oracle = new OracleClient('https://oracle.lux.network')

// Get latest price feed
const price = await oracle.getPrice('LUX/USD')
console.log(\`LUX price: $\${price.value} (round \${price.round})\`)`,
    explorerUrl: 'https://explore.lux.network/o-chain',
    docsUrl: 'https://docs.lux.network/apis/oracle',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/oraclevm',
  },

  // ── Privacy ──
  {
    id: 'T',
    name: 'Threshold',
    fullName: 'T-Chain (Threshold)',
    desc: 'MPC-as-a-service for all Lux chains. Threshold key generation, threshold signing, and FHE operations. Cross-chain signing quotas and session management.',
    longDesc: `The Threshold Chain provides Multi-Party Computation as a service to all other Lux chains. It manages threshold key generation, threshold signing ceremonies, and Fully Homomorphic Encryption operations.

T-Chain enables enterprise-grade key management without single points of failure. Private keys are never assembled in one place — they're split across multiple parties, and a configurable threshold must cooperate to sign any transaction.

FHE operations on the T-Chain allow smart contracts to compute on encrypted data without ever decrypting it, enabling truly confidential DeFi. Combined with ZK proofs from Z-Chain, this creates the most private blockchain execution environment available.`,
    color: 'from-rose-500/20 to-rose-600/5',
    consensus: 'Linear',
    category: 'privacy',
    categoryLabel: 'Privacy Chain',
    features: [
      'Threshold key generation (DKG)',
      'Threshold signing ceremonies',
      'Fully Homomorphic Encryption (TFHE)',
      'Cross-chain signing quotas',
      'Session management',
      'Enterprise key management',
    ],
    specs: [
      { label: 'MPC Scheme', value: 'Threshold (t-of-n)' },
      { label: 'FHE', value: 'BFV / CKKS' },
      { label: 'Key Types', value: 'ECDSA, EdDSA, BLS' },
      { label: 'Session TTL', value: 'Configurable' },
      { label: 'Signing Latency', value: '~500ms' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { ThresholdClient } from 'luxnet/threshold'

const mpc = new ThresholdClient('https://mpc.lux.network')

// Generate a threshold key
const keyGroup = await mpc.generateKey({
  parties: 5,
  threshold: 3,
  keyType: 'ecdsa',
})

// Sign with threshold
const sig = await mpc.sign(keyGroup.id, messageHash)`,
    explorerUrl: 'https://explore.lux.network/t-chain',
    docsUrl: 'https://docs.lux.network/apis/threshold',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/thresholdvm',
  },
  {
    id: 'Q',
    name: 'Quantum',
    fullName: 'Q-Chain (Quantum)',
    desc: 'Post-quantum cryptography with ML-DSA signatures and Ringtail key management. Quasar hybrid BLS+Ringtail consensus for PQ finality. DAG-based parallel processing.',
    longDesc: `The Quantum Chain is the post-quantum security layer of Lux Network. It implements NIST-approved lattice-based cryptographic algorithms — ML-DSA for digital signatures, ML-KEM for key encapsulation, and SLH-DSA for stateless hash-based signatures.

The Quasar hybrid consensus combines classical BLS signatures with Ringtail post-quantum signatures, providing security against both classical and quantum computing attacks. The DAG-based processing model enables parallel transaction execution for maximum throughput.

Q-Chain serves as the security anchor for the entire network. Other chains can reference Q-Chain attestations to provide post-quantum security guarantees for their own operations.`,
    color: 'from-cyan-500/20 to-cyan-600/5',
    consensus: 'DAG',
    category: 'privacy',
    categoryLabel: 'Privacy Chain',
    features: [
      'ML-DSA digital signatures (NIST)',
      'ML-KEM key encapsulation',
      'SLH-DSA stateless hash signatures',
      'Hybrid BLS+Ringtail consensus',
      'DAG-based parallel processing',
      'Post-quantum attestation service',
    ],
    specs: [
      { label: 'Signatures', value: 'ML-DSA-44/65/87' },
      { label: 'Key Exchange', value: 'ML-KEM-512/768/1024' },
      { label: 'Hash Sigs', value: 'SLH-DSA' },
      { label: 'Consensus', value: 'Quasar (DAG, Hybrid PQ)' },
      { label: 'Security Level', value: 'NIST Level 2-5' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { QuantumClient } from 'luxnet/quantum'

const pq = new QuantumClient('https://quantum.lux.network')

// Generate post-quantum keypair
const keypair = await pq.generateKeypair('ml-dsa-65')

// Sign with PQ signature
const sig = await pq.sign(keypair.secretKey, message)
const valid = await pq.verify(keypair.publicKey, message, sig)`,
    explorerUrl: 'https://explore.lux.network/q-chain',
    docsUrl: 'https://docs.lux.network/apis/quantum',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/quantumvm',
  },
  {
    id: 'Z',
    name: 'ZK',
    fullName: 'Z-Chain (ZK)',
    desc: 'Zero-knowledge UTXO chain for private transactions. Groth16/PLONK proof verification, nullifier-based double-spend prevention, and optional FHE (BFV/CKKS).',
    longDesc: `The ZK Chain provides zero-knowledge privacy for transactions on Lux Network. Using a UTXO model with Groth16 and PLONK proof systems, Z-Chain enables fully private transfers where the sender, receiver, and amount are all hidden.

Nullifier-based double-spend prevention ensures security without revealing transaction graph information. Optional FHE integration via the T-Chain allows smart contracts to operate on encrypted values.

Z-Chain supports both private and transparent transactions, giving users the choice of when to use privacy features. Compliance keys can optionally be configured for regulated environments.`,
    color: 'from-violet-500/20 to-violet-600/5',
    consensus: 'Linear',
    category: 'privacy',
    categoryLabel: 'Privacy Chain',
    features: [
      'Groth16 and PLONK proof systems',
      'Private UTXO transfers',
      'Nullifier-based double-spend prevention',
      'Optional FHE (BFV/CKKS)',
      'Selective disclosure',
      'Compliance key support',
    ],
    specs: [
      { label: 'Proof Systems', value: 'Groth16, PLONK' },
      { label: 'Model', value: 'UTXO (shielded)' },
      { label: 'Privacy', value: 'Sender, Receiver, Amount' },
      { label: 'FHE', value: 'Optional (via T-Chain)' },
      { label: 'Proof Time', value: '~2 seconds' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { ZkClient } from 'luxnet/zk'

const zk = new ZkClient('https://zk.lux.network')

// Create a private transfer
const tx = await zk.privateTransfer({
  from: shieldedWallet,
  to: recipientViewKey,
  amount: '100',
  asset: 'LUX',
})`,
    explorerUrl: 'https://explore.lux.network/z-chain',
    docsUrl: 'https://docs.lux.network/apis/zkchain',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/zkvm',
  },
  {
    id: 'K',
    name: 'Key',
    fullName: 'K-Chain (Key)',
    desc: 'Distributed key management with ML-KEM-512/768/1024 encapsulation, ML-DSA-44/65/87 signatures, BLS threshold signing, and AES-256-GCM encryption.',
    longDesc: `The Key Chain provides distributed key management services for the entire Lux ecosystem. It supports multiple post-quantum key encapsulation mechanisms (ML-KEM), signature schemes (ML-DSA), BLS threshold signing, and AES-256-GCM encryption.

K-Chain acts as a decentralized key management service (KMS) where keys are generated, stored, rotated, and revoked through on-chain governance. No single party has access to complete keys — they're always distributed across the validator set.

Enterprises can use K-Chain for secure key lifecycle management without running their own HSM infrastructure. The on-chain audit trail provides complete transparency for compliance requirements.`,
    color: 'from-pink-500/20 to-pink-600/5',
    consensus: 'Linear',
    category: 'privacy',
    categoryLabel: 'Privacy Chain',
    features: [
      'ML-KEM key encapsulation (512/768/1024)',
      'ML-DSA signatures (44/65/87)',
      'BLS threshold signing',
      'AES-256-GCM encryption',
      'Key lifecycle management',
      'On-chain audit trail',
    ],
    specs: [
      { label: 'Encapsulation', value: 'ML-KEM-512/768/1024' },
      { label: 'Signatures', value: 'ML-DSA-44/65/87' },
      { label: 'Threshold', value: 'BLS (t-of-n)' },
      { label: 'Encryption', value: 'AES-256-GCM' },
      { label: 'Key Rotation', value: 'Automated' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { KeyClient } from 'luxnet/key'

const kms = new KeyClient('https://key.lux.network')

// Generate and store a managed key
const key = await kms.generateKey({
  algorithm: 'ml-kem-768',
  label: 'my-encryption-key',
})

// Encrypt data
const encrypted = await kms.encrypt(key.id, plaintext)`,
    explorerUrl: 'https://explore.lux.network/k-chain',
    docsUrl: 'https://docs.lux.network/apis/keychain',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/keyvm',
  },

  // ── Infrastructure ──
  {
    id: 'A',
    name: 'AI',
    fullName: 'A-Chain (AI)',
    desc: 'AI compute task management with TEE attestation (SGX, SEV-SNP, TDX, nvtrust). Provider registration, task assignment, epoch-based rewards, and Merkle anchoring to Q-Chain.',
    longDesc: `The AI Chain manages decentralized AI compute workloads with hardware-level trust through Trusted Execution Environment attestation. Supported TEE platforms include Intel SGX, AMD SEV-SNP, Intel TDX, and NVIDIA nvtrust.

Compute providers register on the A-Chain with their hardware capabilities and TEE attestation certificates. Tasks are assigned based on requirements, and results are verified through attestation proofs anchored to the Q-Chain via Merkle trees.

Epoch-based rewards incentivize providers to maintain high availability and performance. The A-Chain enables trustless AI inference and training without revealing model weights or input data.`,
    color: 'from-indigo-500/20 to-indigo-600/5',
    consensus: 'Linear',
    category: 'infra',
    categoryLabel: 'Infrastructure',
    features: [
      'TEE attestation (SGX, SEV-SNP, TDX, nvtrust)',
      'Compute provider registration',
      'Task assignment and scheduling',
      'Epoch-based reward distribution',
      'Merkle proof anchoring to Q-Chain',
      'Confidential AI inference',
    ],
    specs: [
      { label: 'TEE Support', value: 'SGX, SEV-SNP, TDX, nvtrust' },
      { label: 'Task Types', value: 'Inference, Training, Fine-tune' },
      { label: 'Attestation', value: 'Hardware-level' },
      { label: 'Rewards', value: 'Epoch-based' },
      { label: 'Anchoring', value: 'Merkle → Q-Chain' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { AiClient } from 'luxnet/ai'

const ai = new AiClient('https://ai.lux.network')

// Submit an inference task
const task = await ai.submitTask({
  model: 'llama-3-70b',
  input: { prompt: 'Explain Lux Network' },
  tee: 'sgx',  // require SGX attestation
})

const result = await ai.getResult(task.id)`,
    explorerUrl: 'https://explore.lux.network/a-chain',
    docsUrl: 'https://docs.lux.network/apis/aichain',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/aivm',
  },
  {
    id: 'G',
    name: 'Graph',
    fullName: 'G-Chain (Graph)',
    desc: 'GraphQL-based data indexing and querying across all Lux chains. Schema management, cross-chain federation, subscriptions, and automatic indexing with DGraph.',
    longDesc: `The Graph Chain provides a decentralized data indexing and query layer for all Lux chains. Using GraphQL as the query language and DGraph as the storage backend, G-Chain enables efficient cross-chain data federation.

Developers define schemas and indexing rules, and G-Chain validators automatically index blockchain data as it's produced. Subscriptions provide real-time updates, and cross-chain federation allows queries that span multiple Lux chains in a single request.

G-Chain eliminates the need for custom indexing infrastructure. Any dApp can query historical and real-time blockchain data through a standard GraphQL endpoint.`,
    color: 'from-teal-500/20 to-teal-600/5',
    consensus: 'Linear',
    category: 'infra',
    categoryLabel: 'Infrastructure',
    features: [
      'GraphQL query language',
      'DGraph storage backend',
      'Cross-chain data federation',
      'Real-time subscriptions',
      'Automatic blockchain indexing',
      'Custom schema definitions',
    ],
    specs: [
      { label: 'Query Language', value: 'GraphQL' },
      { label: 'Storage', value: 'DGraph' },
      { label: 'Federation', value: 'Cross-chain' },
      { label: 'Updates', value: 'Real-time (subscriptions)' },
      { label: 'Indexing', value: 'Automatic' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { GraphClient } from 'luxnet/graph'

const graph = new GraphClient('https://graph.lux.network')

// Query cross-chain data
const result = await graph.query(\`{
  transfers(chain: "C", first: 10) {
    from
    to
    amount
    block { number timestamp }
  }
}\`)`,
    explorerUrl: 'https://explore.lux.network/g-chain',
    docsUrl: 'https://docs.lux.network/apis/graph',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/graphvm',
  },
  {
    id: 'R',
    name: 'Relay',
    fullName: 'R-Chain (Relay)',
    desc: 'IBC-like cross-chain message relay with ordered and unordered channels. Sequence numbers, Merkle proof verification, and session-ready receipt commitments.',
    longDesc: `The Relay Chain provides IBC-compatible cross-chain message passing between Lux chains and external IBC-enabled networks. It supports both ordered channels (guaranteed delivery order) and unordered channels (best-effort delivery).

Messages are verified through Merkle proofs, with sequence numbers preventing replay attacks. Receipt commitments enable session-aware protocols where both sides can confirm message delivery.

R-Chain extends Lux Network's interoperability beyond simple asset bridges to general-purpose cross-chain communication — enabling cross-chain smart contract calls, governance votes, and data sharing.`,
    color: 'from-sky-500/20 to-sky-600/5',
    consensus: 'Linear',
    category: 'infra',
    categoryLabel: 'Infrastructure',
    features: [
      'IBC-compatible message protocol',
      'Ordered and unordered channels',
      'Sequence number tracking',
      'Merkle proof verification',
      'Receipt commitments',
      'Cross-chain smart contract calls',
    ],
    specs: [
      { label: 'Protocol', value: 'IBC-compatible' },
      { label: 'Channels', value: 'Ordered / Unordered' },
      { label: 'Verification', value: 'Merkle proofs' },
      { label: 'Ordering', value: 'Sequence numbers' },
      { label: 'Receipts', value: 'Commitment-based' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { RelayClient } from 'luxnet/relay'

const relay = new RelayClient('https://relay.lux.network')

// Send a cross-chain message
const msg = await relay.sendMessage({
  sourceChain: 'lux-c',
  destChain: 'cosmos-hub',
  channel: 'channel-0',
  data: encodedPayload,
})`,
    explorerUrl: 'https://explore.lux.network/r-chain',
    docsUrl: 'https://docs.lux.network/apis/relay',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/relayvm',
  },
  {
    id: 'I',
    name: 'Identity',
    fullName: 'I-Chain (Identity)',
    desc: 'W3C-compatible decentralized identity (did:lux:) and verifiable credentials. Trusted issuer registry, credential revocation, and ZK selective disclosure.',
    longDesc: `The Identity Chain implements the W3C Decentralized Identifiers (DID) and Verifiable Credentials specifications, providing a decentralized identity layer for Lux Network users and applications.

DIDs are created with the \`did:lux:\` method and can be used for authentication, authorization, and credential presentation across the entire ecosystem. A trusted issuer registry manages which entities can issue verifiable credentials.

ZK selective disclosure allows users to prove claims about their identity (e.g., "I am over 18") without revealing the underlying data. Credential revocation is managed on-chain with instant propagation.`,
    color: 'from-lime-500/20 to-lime-600/5',
    consensus: 'Linear',
    category: 'infra',
    categoryLabel: 'Infrastructure',
    features: [
      'W3C DID specification (did:lux:)',
      'Verifiable credentials',
      'Trusted issuer registry',
      'Credential revocation',
      'ZK selective disclosure',
      'Cross-chain identity federation',
    ],
    specs: [
      { label: 'DID Method', value: 'did:lux:' },
      { label: 'Credentials', value: 'W3C Verifiable Credentials' },
      { label: 'Privacy', value: 'ZK selective disclosure' },
      { label: 'Revocation', value: 'On-chain (instant)' },
      { label: 'Issuers', value: 'Registry-managed' },
      { label: 'Chain Type', value: 'Optional' },
    ],
    sdkExample: `import { IdentityClient } from 'luxnet/identity'

const id = new IdentityClient('https://id.lux.network')

// Create a DID
const did = await id.createDID({
  method: 'lux',
  publicKey: myPublicKey,
})
// did:lux:0x1234...

// Issue a verifiable credential
const vc = await id.issueCredential({
  issuer: issuerDID,
  subject: did,
  claims: { age: { gte: 18 } },
})`,
    explorerUrl: 'https://explore.lux.network/i-chain',
    docsUrl: 'https://docs.lux.network/apis/identity',
    githubUrl: 'https://github.com/luxfi/node/tree/main/vms/identityvm',
  },
]

export const coreChains = chains.filter(c => c.category === 'core')
export const defiChains = chains.filter(c => c.category === 'defi')
export const privacyChains = chains.filter(c => c.category === 'privacy')
export const infraChains = chains.filter(c => c.category === 'infra')

export function getChainById(id: string): ChainInfo | undefined {
  return chains.find(c => c.id === id)
}
