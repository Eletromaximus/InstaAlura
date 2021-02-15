// eslint-disable-next-line no-use-before-define
import React from 'react'
import { LinkBase } from './styles/LinkBase'

interface ILinkProps {
  variant: string;
  href: string;
  children?: React.ReactNode
}

export default function Link ({ variant, href, children }: ILinkProps) {
  return (
    <LinkBase variant={variant} href={href}>
      {children}
    </LinkBase>
  )
}
