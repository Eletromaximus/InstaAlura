// eslint-disable-next-line no-use-before-define
import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import get from 'lodash/get'
// import { LinkBase } from './LinkBase'

interface ILinkProps {
	href: string;
	children: React.ReactNode;
}

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit;')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
`

export default function Link ({ href, children, ...props }: ILinkProps) {
  return (
		<NextLink href={href} passHref>
			<StyledLink {...props} >
				{children}
			</StyledLink>
		</NextLink>
  )
}
