import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariantsMap } from '../../../fundation/Text'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

interface IProps {
  ghost?: boolean;
  variant?: string;
}

const ButtonGhost = css<IProps>`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`)
  }};
  background: transparent;
`
const ButtonDefault = css<IProps>`
  color: white;
  background-color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`)
  }};
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.contrastText`)
  }};
`
export const Button = styled.button<IProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  color: white;
  background-color: #D7385E;


  ${function (props) {
    return `
      @media screen and (min-width: ${props.theme.breakpoints.xs}px) {
        background: red !important;
      }

      @media screen and (min-width: ${props.theme.breakpoints.sm}px) {
        background: red !important;
      }
      @media screen and (min-width: ${props.theme.breakpoints.md}px) {
        background: red !important;
      }
    `
  }}

  ${TextStyleVariantsMap.smallestException}

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
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `
  })}
`
