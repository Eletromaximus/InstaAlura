import React from 'react'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

// import { Container } from './styles';

function LoginPage () {
  return <div>
		Login Page
	</div>
};

export default websitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login'
    }
  }
})
