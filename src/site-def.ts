import { footer, mainNav, type SiteDef  } from '@luxfi/ui/site-def'

import { commerceConfig as commerce } from '@luxfi/data/commerce'

export default {
  currentAs: 'https://lux.network',
  nav: {
    common: mainNav,
  },
  footer: footer.standard,
  // Auth on (login button -> lux.id via NEXT_PUBLIC_LOGIN_SITE_URL) and the
  // crypto-native commerce bag enabled — both were stripped by the static
  // export; restored from the full app (commit 515f0cb).
  commerce,
  chatbot: {
    suggestedQuestions:[{
      heading: 'Lux network features',
      message: 'What are the key features of Lux network?',
      icon: 'ShieldFlashLineIcon'
    }]
  }
} satisfies SiteDef
