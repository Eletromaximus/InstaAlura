
import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import PropTypes from 'prop-types'
import WebsiteGlobalProvider from '../../components/wrappers/WebsitePage/provider'

const AllTheProviders: FC = ({ children, ...props }: any) => {
  return (
    <WebsiteGlobalProvider {...props}>
        {children}
    </WebsiteGlobalProvider>
  )
}
AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired
}
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
