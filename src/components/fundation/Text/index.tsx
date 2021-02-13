import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

interface Props {
  tag: any;
  variant: string;
  children: string | Node;
  href?: string;
}

const smallestException = css`
  font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.lineHeight};
`
const paragraph1 = css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeigth};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `

export const TextStyleVariants: Record<string, any> = {
  smallestException,
  paragraph1

}

const TextBase = styled.span<Props>`
  ${(props) => TextStyleVariants[props.variant]}
`

export default function Text ({ tag, variant, children, href }: Props) {
  return (

    <TextBase as={tag} variant={variant} href={href}>
      {children}
    </TextBase>
  )
}

Text.prototype = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1'
}
