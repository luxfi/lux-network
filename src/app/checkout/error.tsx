'use client'

// Route-segment error boundary for /checkout.
//
// Safety net: if anything in the checkout subtree throws during render — e.g.
// the @hanzo/commerce Square PaymentForm, whose internal ErrorScreen *throws*
// in production when merchant credentials are absent — React unwinds to the
// nearest error boundary. Without this file that boundary is Next.js's global
// handler, which white-screens the route with "Application error".
//
// It MUST be self-evidently readable no matter what the rest of the layout
// paints. The shared chrome renders a fixed white ▼ brand mark; a fallback that
// merely sets `bg-background`/`text-foreground` ends up painted *under* that
// mark (near-white text occluded by white art) and is invisible. So this
// fallback is an opaque, top-of-stack overlay (`position: fixed`, `inset: 0`,
// max `z-index`) with its own dark card and explicitly contrasting colors set
// inline — it cannot be themed away, occluded, or lose a hydration race.
// Monochrome (Lux brand): black surface, white text.
import { useEffect } from 'react'
import Link from 'next/link'

export default function CheckoutError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Surface the cause in the browser console / server logs for debugging.
    console.error('checkout error boundary caught:', error)
  }, [error])

  return (
    <div
      role="alert"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483647,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: '#000000',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '28rem',
          textAlign: 'center',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>
          Checkout is temporarily unavailable
        </h1>
        <p style={{ margin: '1rem 0 0', fontSize: '0.95rem', lineHeight: 1.6, color: '#a3a3a3' }}>
          We could not load the payment experience right now. Your cart is safe.
          Please try again in a moment.
        </p>
        <div
          style={{
            marginTop: '1.75rem',
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={reset}
            style={{
              appearance: 'none',
              cursor: 'pointer',
              border: 0,
              borderRadius: '9px',
              padding: '0.625rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              background: '#ffffff',
              color: '#000000',
            }}
          >
            Try again
          </button>
          <Link
            href="/"
            prefetch={false}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              borderRadius: '9px',
              padding: '0.625rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
            }}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
