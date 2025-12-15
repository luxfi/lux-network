'use client'

import React from 'react'
import { useParams, notFound } from 'next/navigation'

import { Footer, Header, Main } from '@luxfi/ui'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import ProductDetailBlockComponent from '@/blocks/components/product-detail-block'
import { products } from '@/content'

import siteDef from '@/site-def'

const ProductPageClient = () => {
  const params = useParams()
  const slug = params?.slug as 'coin' | 'validator'

  const product = products[slug] as ProductDetailBlock

  if (!product) {
    notFound()
  }

  return (<>
    <Header siteDef={siteDef}/>
    <Main className='md:flex-row md:gap-4 '>
      <ProductDetailBlockComponent block={product} />
    </Main>
    <div className='border-t'></div>
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
  </>)
}

export default ProductPageClient
