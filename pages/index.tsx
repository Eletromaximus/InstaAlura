import HomeScreen from '../src/components/screens/HomeScreen'
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc'

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home'
    },
    pageBoxProps: {
      justifyContent: 'space-Between',
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right'
    }
    // menuProps: {true}
  }
})
