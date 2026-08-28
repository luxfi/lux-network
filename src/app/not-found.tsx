import Link from "next/link"
import { Box, css } from '@hanzo/ui'

export default function NotFoundComponent() {
  return (
    <Box className="flex min-h-[100dvh] flex-col items-center justify-center bg-background text-foreground font-inter">
      <Box className="mx-auto max-w-md text-center">
        <Box tag="h1" className="text-[96px] font-bold">404</Box>
        <Box tag="p" className="mt-4 text-2xl">Oops, page not found</Box>
        <Link
          href="/"
          className={'mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'} style={css('mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2')}
          prefetch={false}
        >
          Go to Homepage
        </Link>
      </Box>
    </Box>
  )
}
