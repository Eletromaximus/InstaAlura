import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariants } from '../../../fundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'

interface IProps {
  ghost?: boolean;
  variant?: string;
}

const ButtonGhost = css<IProps>`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`)
  }};
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
`
const Button = styled.button<IProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  color: white;
  background-color: #D7385E;

  ${TextStyleVariants.smallestException}

  ${function (props) {
      if (props.ghost) {
      return ButtonGhost
    }
    return ButtonDefault
  }}

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    opacity: .5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `
  })}
`
export default Button
/* ${function (props) {
    return `
      @media screen and (min-width: ${props.theme.breakpoints.xs}px) {
        background: red !important;
      }

      @media screen and (min-width: ${props.theme.breakpoints.sm}px) {
        background: blue !important;
      }
      @media screen and (min-width: ${props.theme.breakpoints.md}px) {
        background: black !important;
      }
    `
  }} */
