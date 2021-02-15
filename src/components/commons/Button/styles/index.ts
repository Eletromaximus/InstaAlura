import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariants } from '../../../fundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import propToStyle from '../../../theme/utils/propToStyle'

interface IProps {
  ghost?: boolean;
  variant?: string;
  margin?: string | object;
  display?: string | object;
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
const Button = styled.button<IProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  background-color: #D7385E;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

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
  ${propToStyle('display')}
  
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }

`
export default Button
