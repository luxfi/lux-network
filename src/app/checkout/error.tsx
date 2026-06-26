'use client'

// Route-segment error boundary for /checkout.
//
// Safety net: if anything in the checkout subtree throws during render — e.g.
// the @hanzo/commerce Square PaymentForm, whose internal ErrorScreen *throws*
// in production (NODE_ENV !== 'development') when merchant credentials are
// absent — React unwinds to the nearest error boundary. Without this file that
// boundary is Next.js's global handler, which white-screens the route with
// "Application error: a client-side exception has occurred". This boundary keeps
// the failure contained and renders a clear, on-brand fallback instead.
//
// The primary path (env-guarded card.tsx renders a "card payments coming soon"
// state when NEXT_PUBLIC_SQUARE_* are absent) means this should rarely fire — but
// it guarantees /checkout can never white-screen, whatever throws.
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
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background text-foreground font-inter">
      <div className="mx-auto max-w-md px-6 text-center">
        <h1 className="text-3xl font-bold">Checkout is temporarily unavailable</h1>
        <p className="mt-4 text-base text-muted-foreground">
          We could not load the payment experience right now. Your cart is safe.
          Please try again in a moment.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Try again
          </button>
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
