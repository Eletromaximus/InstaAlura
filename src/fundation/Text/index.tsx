import styled, { css } from 'styled-components'
import propToStyle from '../../components/theme/utils/propToStyle'
import get from 'lodash/get'
import React from 'react'
import { breakpointsMedia } from '../../components/theme/utils/breakpointsMedia'
import Link from '../Link'

interface Props {
	tag?: 'input' | 'p' | 'span' | 'h1' | any;
	variant: string;
	textAlign?: string | object;
	marginBottom?: string | object;
	margin?: string | object;
	textDecoration?: string | object;
	color?: string | object;
	children: string | number | React.ReactNode | undefined;
	type?: string;
	placeholder?: string;
	name?: any;
	onChange?: () => void;
	value?: any;
	href?: string;
}

const smallestException = css`
  font-size: ${({ theme }) =>
		theme.typographyVariants.smallestException.fontSize};
	font-weight: ${({ theme }) =>
		theme.typographyVariants.smallestException.fontWeight};
	line-height: ${({ theme }) =>
		theme.typographyVariants.smallestException.lineHeight};
`
const paragraph1 = css`
  font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeigth};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
`

export const TextStyleVariants: Record<string, any> = {
  smallestException,
  paragraph1,

  title: css`
		${({ theme }) => css`
			font-size: ${theme.typographyVariants.titleXS.fontSize};
			font-weight: ${theme.typographyVariants.titleXS.fontWeight};
			line-height: ${theme.typographyVariants.titleXS.lineHeight};
		`}

		${breakpointsMedia({
			md: css`
				${({ theme }) => css`
					font-size: ${theme.typographyVariants.titleXS.fontSize};
					font-weight: ${theme.typographyVariants.titleXS.fontWeight};
					line-height: ${theme.typographyVariants.titleXS.lineHeight};
				`}
			`
		})}
	`
}
// color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
const TextBase = styled.span<Props>`
	${(props) => TextStyleVariants[props.variant]}
	color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

	${propToStyle('textAlign')}
	${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`

export default function Text (props: Props) {
  const hasHref = Boolean(props.href)

  return (
		<TextBase
			as={hasHref ? Link : props.tag}
			variant={props.variant}
			textAlign={props.textAlign}
			color={props.color}
			marginBottom={props.marginBottom}
			margin={props.margin}
			href={props.href}>
			{props.children}
		</TextBase>
  )
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null
}
