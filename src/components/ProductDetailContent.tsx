'use client'

import React from 'react'
import { Box } from '@hanzo/ui'

import { Header, Footer, Main } from '@luxfi/ui'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import ProductDetailBlockComponent from '@/blocks/components/product-detail-block'
import siteDef from '@/site-def'

// Client boundary for the product pages: the @luxfi/ui Header/Footer nav passes
// function props that cannot cross an RSC server→client boundary, so the chrome
// must render inside a client component (same split as chain/[id] and docs).
const ProductDetailContent: React.FC<{ block: ProductDetailBlock }> = ({ block }) => (
  <>
    <Header siteDef={siteDef} logoVariant='full' />
    <Main className='md:flex-row md:gap-4 '>
      <ProductDetailBlockComponent block={block} />
    </Main>
    <Box className='border-t'></Box>
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
  </>
)

export default ProductDetailContent
