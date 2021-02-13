import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

interface Props {
  tag: any;
  variant: string;
  children: string | Node;
  href?: string;
}

export const TextStyleVariantsMap = {
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException};
  `
}

const TextBase = styled.span<Props>`
  ${(props) => TextStyleVariantsMap[props.variant]}
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
