import { notFound } from 'next/navigation'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import { products } from '@/content'
import ProductDetailContent from '@/components/ProductDetailContent'

type Props = {
  params: { slug: 'coin' | 'validator' }
}

// Product detail pages render the @luxfi/ui chrome (client) and the commerce
// CTA — rendered on demand by the standalone Node server.
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Props) {
  const title = params.slug
  const capitalized = title.charAt(0).toUpperCase() + title.slice(1)
  return { title: capitalized }
}

const ProductPage = ({ params }: Props) => {
  const product = products[params.slug] as ProductDetailBlock

  if (!product) {
    notFound()
  }

  return <ProductDetailContent block={product} />
}

export default ProductPage
