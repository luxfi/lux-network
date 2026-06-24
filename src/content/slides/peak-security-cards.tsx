import type {
  Block,
  CardBlock,
} from '@hanzo/ui/blocks'

const underlineStrong = (text: string) => <strong className='border-b-2 border-secondary'>{text}</strong>

const headlines = [
  'POST-QUANTUM CRYPTOGRAPHY',
  'THRESHOLD SECURITY'
]

const bylines = [
  <span>Lux implements {underlineStrong('NIST FIPS 203/204/205')} standards: {underlineStrong('ML-KEM')} for post-quantum key encapsulation, {underlineStrong('ML-DSA')} for lattice-based digital signatures, and {underlineStrong('SLH-DSA')} for stateless hash-based signatures. Q-Chain provides quantum-resistant consensus via {underlineStrong('Ringtail signatures')}.</span>,
  'FROST threshold signatures enable distributed key generation and signing across validator sets.',
  'T-Chain ThresholdVM powers fully homomorphic encryption (FHE) for confidential on-chain computation.',
  'MPC custody with CGGMP21 threshold ECDSA and dynamic signer rotation via LSS protocol.'
]

export default [
  {blockType: 'card',
    specifiers: 'content-top ghost',
    content: <div><h1>{headlines[0]}</h1><br /><p>{bylines[0]}</p></div>,
  } as CardBlock,
  {blockType: 'card',
    specifiers: 'content-top ghost',
    content: <div>
      <h1>{headlines[1]}</h1>
      <br />
      <ul><li>{bylines[1]}</li><li>{bylines[2]}</li><li>{bylines[3]}</li></ul>
    </div>,
  } as CardBlock,
] as Block[]
