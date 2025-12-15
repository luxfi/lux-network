import dynamic from 'next/dynamic'

// Dynamic import to avoid RSC function serialization issues
const ProductPageClient = dynamic(() => import('./client-page'), { ssr: false })

export async function generateStaticParams() {
  return [
    { slug: 'coin' },
    { slug: 'validator' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const capitalized = slug.charAt(0).toUpperCase() + slug.slice(1)
  return { title: capitalized }
}

export default function ProductPage() {
  return <ProductPageClient />
}
