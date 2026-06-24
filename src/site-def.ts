import { footer, mainNav, type SiteDef  } from '@luxfi/ui/site-def'

export default {
  currentAs: 'https://lux.network',
  nav: {
    common: mainNav,
  },
  footer: footer.standard,
  noAuth: true,
  chatbot: {
    suggestedQuestions:[{
      heading: 'Lux network features', 
      message: 'What are the key features of Lux network?', 
      icon: 'ShieldFlashLineIcon' 
    }]    
  }
} satisfies SiteDef
