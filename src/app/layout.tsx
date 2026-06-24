import React, { type PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'

import {
  RootLayout as RootLayoutCore,
  viewport as ViewportCore,
} from '@luxfi/ui/root-layout'

import './globals.css'

import _metadata from '@/metadata'
import siteDef from '@/site-def'

export const metadata: Metadata = { ..._metadata }

export const viewport: Viewport = { ...ViewportCore }

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <RootLayoutCore siteDef={siteDef} chatbot>
    {children}
  </RootLayoutCore>
)

export default RootLayout
