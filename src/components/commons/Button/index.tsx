import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariants } from '../../fundation/Text'
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia'
import propToStyle from '../../theme/utils/propToStyle'
import Link from '../../fundation/Link'

interface IProps {
  ghost?: boolean;
  variant?: string;
  margin?: string | object;
  width?: string | object;
  paddingRight?: string | object;
  display?: string | object;
  fullWidth?: boolean;
  href?: string
}

interface IButton {
  href?: string;
  children: any;
  variant?: string;
  margin?: string | object;
  width?: string | object;
  paddingRight?: string | object;
  ghost?: boolean;
  display?: string | object;
  fullWidth?: boolean;
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonGhost = css<IProps>`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;

  &:hover {
    border: 1px solid
      ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  }
`
const ButtonDefault = css<IProps>`
  background-color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`)
  }};
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.contrastText`)
  }};

&:hover {
    border: 1px solid
      ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  }
`
const ButtonWrapper = styled.button<IProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  background-color: #D7385E;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: white;//${({ theme }) => theme.borderRadius};

  ${TextStyleVariants.smallestException}

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `
  })}

  ${propToStyle('margin')}
  ${propToStyle('width')}
  ${propToStyle('paddingRight')}
  ${propToStyle('display')}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%
  `}
  
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`

export function Button ({ href, children, variant, ...props }: IButton) {
  const hasHref = Boolean(href)
  const tag = hasHref ? Link : 'button'

  return (
    <ButtonWrapper
    as={tag}
    href={href}
    variant={variant}
    {...props}
    >
     {children}
    </ButtonWrapper>
  )
}

export default Button
