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
	backgroundColor?: string | object;
	boxShadown?: string | object;
	padding?: string | object;
	width?: string | object;
	listStyle?: string | object;
	margin?: string | object;
	marginLeft?: string | object;
	marginBotton?: string | object;
	marginRight?: string | object;
	marginTop?: string | object;
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
  ${propToStyle('backgroundColor')}
  ${propToStyle('width')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginBotton')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginTop')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
`
// ${({ theme, borderRadiusTheme }) => borderRadiusTheme && 'border-radius: $(theme.borderRadius)'}
