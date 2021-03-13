import React from 'react'

import WebsitePagesWrapper from '..'
import WebsiteGlobalProvider from '../provider'

export default function websitePageHOC (PageComponent: any, { pageWrapperProps }: any) {
  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <WebsiteGlobalProvider>
      <WebsitePagesWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePagesWrapper>
    </WebsiteGlobalProvider>
  )
}
