import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../../../theme/GlobalStyle'
import PropTypes from 'prop-types'
import React from 'react'
import theme from '../../../../theme'

export default function WebsiteGlobalProvider ({ children }: any) {
  return (
    <ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
    </ThemeProvider>
  )
}

WebsiteGlobalProvider.defaultProps = {
  children: PropTypes.node.isRequired
}
