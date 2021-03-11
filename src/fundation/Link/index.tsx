// eslint-disable-next-line no-use-before-define
import React from 'react'
import { LinkBase } from './LinkBase'

interface ILinkProps {
  variant: string;
  href: string;
  children?: React.ReactNode;
}

export default function Link (props: ILinkProps) {
  return (
    <LinkBase variant={props.variant} href={props.href} >
      {props.children}
    </LinkBase>
  )
}
