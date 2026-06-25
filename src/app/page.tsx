import HomeContent from '@/components/HomeContent'

// The home page renders the @luxfi/ui Header/Footer (client components whose
// nav passes function props that cannot cross an RSC server→client boundary)
// and the @hanzo/auth AuthWidget (reads the auth-token cookie per request).
// So this route is rendered on demand by the standalone Node server rather
// than statically prerendered at build time.
export const dynamic = 'force-dynamic'

export default function Page() {
  return <HomeContent />
}
