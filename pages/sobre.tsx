import React from 'react'
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc'

function Sobre () {
  return <h1>Sobre</h1>
}

export default websitePageHOC(Sobre, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre'
    }
  }
})
