'use client'

import { useRouter } from 'next/navigation'
import { Box, sx } from '@hanzo/ui'

import { BuyButton } from '@luxfi/ui'
import { Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui'

const ProductCTA: React.FC<{
  learnMoreText: string,
  learnMoreUrl: string,
  skuPath: string,
  className?: string
}> = ({
  learnMoreText,
  learnMoreUrl,
  skuPath,
  className
}) => {
  const router = useRouter()

  return (
    <Box className={cn('w-full flex justify-center items-center gap-4', className)}>
      <Button onClick={() => router.push(learnMoreUrl)} variant='outline' {...sx('w-full')}>{learnMoreText}</Button>
      <BuyButton skuPath={skuPath} className='w-full'>Buy</BuyButton>
    </Box>
  )
}

export default ProductCTA