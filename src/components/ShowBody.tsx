'use client'

import { useEffect } from 'react'

// @luxfi/ui's RootLayout renders <body style="display:none"> and relies on its
// <Analytics/> effect to reveal it after mount — a FOUC guard. On this dynamic
// standalone build that reveal loses to React reconciliation: the layout keeps
// re-rendering the <body> with the SSR inline `display:none`, so the whole page
// stays invisible (black). We pin the body visible and keep it pinned with a
// MutationObserver that re-asserts whenever React rewrites the style attribute.
// (CSS `!important` can't win here — the app's globals stylesheet isn't linked
// on every route, whereas this runs wherever the layout renders.) Renders nothing.
const ShowBody = () => {
  useEffect(() => {
    const body = document.body
    if (!body) return

    const reveal = () => {
      if (body.style.display !== 'flex') {
        body.style.setProperty('display', 'flex', 'important')
      }
    }
    reveal()

    const obs = new MutationObserver(reveal)
    obs.observe(body, { attributes: true, attributeFilter: ['style'] })
    return () => obs.disconnect()
  }, [])

  return null
}

export default ShowBody
