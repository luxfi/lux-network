import type {
  ElementBlock,
  EnhHeadingBlock,
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { Button, Input } from '@hanzo/ui/primitives'
import { Box, sx } from '@hanzo/ui'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center',
      preheading: { text: 'Want exclusive access?', level: 3, mb: 8 },
      heading: { text: '#WAGMI', level: 1 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 1},
    {blockType: 'element',
      element: <Box tag="form" className="flex gap-2">
      <Input placeholder="Phone number" required />
      <Button type='submit' formTarget='_self' {...sx('px-6')}>I WANT IN</Button>
    </Box>
    } as ElementBlock
  ]],
} as ScreenfulBlock
