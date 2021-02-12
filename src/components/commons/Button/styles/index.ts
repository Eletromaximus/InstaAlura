import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariantsMap } from '../../../fundation/Text'

interface IProps {
  ghost?: boolean;
  variant?: any;
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
`
