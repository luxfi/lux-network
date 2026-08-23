import React, { type PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'

import {
  RootLayout as RootLayoutCore,
  viewport as ViewportCore,
} from '@luxfi/ui/root-layout'

// Zen — the faces and the --font-sans / --font-mono role tokens. Imported here
// rather than @import-ed into globals.css: postcss-import inlines an @import
// without rebasing its url()s, and the woff2 paths would then be looked for
// beside globals.css instead of beside the package.
import '@hanzo/design/tokens/fonts.css'
import './globals.css'

import _metadata from '@/metadata'
import siteDef from '@/site-def'
import ShowBody from '@/components/ShowBody'

export const metadata: Metadata = { ..._metadata }

export const viewport: Viewport = { ...ViewportCore }

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <RootLayoutCore siteDef={siteDef} chatbot>
    <ShowBody />
    {children}
  </RootLayoutCore>
)

export default RootLayout
