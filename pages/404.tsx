import React from 'react'
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc'
import Page404 from '../src/components/screens/ScreenPage404'


export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home'
    },
    pageBoxProps: {
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    menuProps: true
  }}
)
