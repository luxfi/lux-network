import { NextRequest, NextResponse, userAgent } from 'next/server'
import { getSelectorsByUserAgent } from 'react-device-detect'

// Device-detection + auth-token middleware (restored from the full app). This
// re-implements @luxfi/ui's determineDeviceMW with one fix: react-device-detect's
// getSelectorsByUserAgent returns `undefined` for an empty User-Agent, and the
// upstream helper destructures it unguarded — so any UA-less request (k8s
// liveness/readiness probes, curl, some bots) throws and 500s. We default to
// 'desktop' when the UA can't be classified so health checks and SSR never crash.
export const middleware = async (request: NextRequest) => {
  const ua = userAgent(request)
  const selectors = ua.ua ? getSelectorsByUserAgent(ua.ua) : undefined
  const agent = selectors?.isMobileOnly
    ? 'phone'
    : selectors?.isTablet
      ? 'tablet'
      : 'desktop'

  const { nextUrl: url } = request

  // Promote an ?auth-token query param (set by the lux.id login redirect) into a
  // cookie, then strip it from the URL.
  const authToken = url.searchParams.get('auth-token')
  const response = NextResponse.rewrite(
    (() => {
      url.searchParams.set('agent', agent)
      if (authToken) url.searchParams.delete('auth-token')
      return url
    })(),
  )

  if (authToken) {
    response.cookies.set('auth-token', authToken, {
      path: '/',
      sameSite: 'none',
      secure: true,
      httpOnly: false,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
    })
  }

  return response
}

// Run on pages only — never on static assets, image optimizer, or favicon
// (avoids needless rewrites on every JS/CSS chunk request).
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|assets|robots.txt|llms.txt).*)'],
}
