import LoginScreen from '../../src/components/screens/app/LoginScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

// Essa página e desafio, e vamos dar pronto no próximo módulo o 04

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login'
    },
    menuProps: {
      display: false
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right'
    }
  }
})
