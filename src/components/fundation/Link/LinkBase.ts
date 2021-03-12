import get from 'lodash/get'
import styled from 'styled-components'
import propToStyle from '../../theme/utils/propToStyle'
import { TextStyleVariants } from '../Text/index'

interface ILinkProps {
  variant: string;
  textAlign?: string | object;
  marginBottom?: string | object;
  margin?: string | object;
  color?: string | object;
  display?: string | object;
  textDecoration?: string | object;
}

export const LinkBase = styled.a<ILinkProps>`
  ${(props) => TextStyleVariants[props.variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
  ${propToStyle('marginBottom')}
  ${propToStyle('display')}
  ${propToStyle('color')}
  ${propToStyle('textDecoration')}
`
LinkBase.defaultProps = {
  textDecoration: 'none',
  color: '#88989E'
}
