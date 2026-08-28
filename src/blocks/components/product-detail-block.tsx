import React from 'react'
import { Box, sx } from '@hanzo/ui'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui'

import type { BlockComponentProps } from '@hanzo/ui/blocks'
import {
  ContentComponent,
  SpaceBlockComponent,
  CardBlockComponent as CardComponent,
  AccordianBlockComponent,
  VideoBlockComponent,
} from '@/blocks/client-blocks'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import SplinePlayer from '@/components/spline-player'

const Spacer: React.FC = () => (
  <SpaceBlockComponent block={{blockType: 'space'}} />
)

const ProductDetailBlockComponent: React.FC<BlockComponentProps> = ({
  agent,
  block,
}) => {

  if (block.blockType !== 'product-detail') {
    return <>product detail block required</>
  }
  const p = block as ProductDetailBlock

  const videoSize = (agent === 'phone') ? 'md' : 'lg'

  const TitleArea: React.FC<{className?: string}> = ({
    className=''
  }) => (
    <ApplyTypography {...sx(cn('typography-headings:text-left typography-h2:md:text-3xl typography-h2:lg:text-4xl', className))}>
      <Box tag="h2" className='text-left'>{p.title}</Box>
      {p.desc && (typeof p.desc === 'string') ? (
          <h6>{p.desc}</h6>
        ) : (
          p.desc
        )
      }
    </ApplyTypography>
  )

  return (
    <Box className='grid grid-cols-1 md:grid-cols-2 w-full'>
      <Box className='mb-6 md:mb-12 w-full'>
        {p.video ? (
          <VideoBlockComponent block={p.video} agent={agent} size={videoSize} className='md:sticky md:top-[80px] md:mt-0 mt-[16px] mx-auto'/>
        ) :
        p.animation ? (
          <SplinePlayer src={p.animation} className='!aspect-square'/>
        ) : null}
      </Box>

      <Box className='md:bg-scroll w-full'>
        <Box className='md:max-w-[555px] flex flex-col items-start gap-4' >
          <TitleArea className='flex flex-col justify-start items-start ' />
          {p.price && (<>
            {p.price.heading && (
              <ApplyTypography >
                <h3>{p.price.heading}</h3>
              </ApplyTypography>
            )}
            <Box className='flex flex-col justify-start items-stretch self-stretch w-full sm:self-center sm:grid sm:grid-cols-2 gap-4 '>
              <CardComponent block={p.price.priceCard} agent={agent} />
              <CardComponent block={p.price.msCard} agent={agent} />
            </Box>
          </>)}
          <AccordianBlockComponent block={p.accordian} agent={agent} className='mt-5'/>
          <Spacer />
          <ContentComponent blocks={p.blocks} agent={agent}/>
          <Spacer />
        </Box>
      </Box>
    </Box>
  )
}

export default ProductDetailBlockComponent
