import websitePageHOC from '@components/wrappers/WebsitePage/hoc'
import Page404 from '@components/screens/ScreenPage404'

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home'
    },
    pageBoxProps: {
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    menuProps: {
      display: true
    }
  }
}
)
