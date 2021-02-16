import styled from 'styled-components'
import propToStyle from '../../../theme/utils/propToStyle'

interface IBox {
  display?: string | object;
  flexDirection?: string | object;
  justifyContent?: string | object;
  flex?: string | object;
  flexWrap?: string | object;
  backgroundImage?: string | object;
  backgroundRepeat?: string | object;
  backgroundPosition?: string | object;
}
export const Box = styled.div<IBox>`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`
