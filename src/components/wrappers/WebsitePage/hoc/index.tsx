import React from 'react'

import WebsitePagesWrapper from '..'
import WebsiteGlobalProvider from '../provider'

export default function websitePageHOC (PageComponent: any, { pageWrapperProps } = { pageWrapperProps: {} }) {
  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <WebsiteGlobalProvider>
      <WebsitePagesWrapper
        {...pageWrapperProps}
        {...props.pageWrapperProps}
        messages={props.messages}
      >
        <PageComponent {...props} />
      </WebsitePagesWrapper>
    </WebsiteGlobalProvider>
  )
}
