import styled, { css } from 'styled-components'
import propToStyle from '../../../theme/utils/propToStyle'

interface ILinkProps {
  variant: string;
}

const TextStyleVariants: Record<string, any> = {
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,

  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `
}

export const LinkBase = styled.a<ILinkProps>`
  ${props => TextStyleVariants[props.variant]}

  ${propToStyle('textAlign')}

`
