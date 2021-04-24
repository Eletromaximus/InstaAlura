import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariants } from '../../foundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import propToStyle from '../../../theme/utils/propToStyle'
import Link from '../../foundation/Link'

interface IProps {
	ghost?: boolean;
	variant?: string;
	margin?: string | object;
	width?: string | object;
	paddingRight?: string | object;
	padding?: string | object;
	display?: string | object;
	fullWidth?: boolean;
	href: string;
	children: React.ReactNode;
}

interface IButton {
	href: string;
	children: React.ReactNode | any;
	variant?: string;
	margin?: string | object;
	width?: string | object;
	paddingRight?: string | object;
	padding?: string | object;
	ghost?: boolean;
	display?: string | object;
	fullWidth?: boolean;
	color?: string;
	type?: string;
	disabled?: boolean;
	onClick?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
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
	background-color: #d7385e;
	transition: opacity ${({ theme }) => theme.transition};
	border-radius: white; //${({ theme }) => theme.borderRadius};

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
  ${propToStyle('padding')}
  ${propToStyle('display')}
  ${propToStyle('color')}

  &:disabled {
		cursor: not-allowed;
		opacity: 0.2;
	}

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
		opacity: 0.5;
	}
`

export function Button ({ href, children, ...props }: IButton) {
  const hasHref = Boolean(href)
  const tag = hasHref ? Link : 'button'

  return (
		<ButtonWrapper
		  as={tag}
			href={href}
			{...props}
		>
			{children}
		</ButtonWrapper>
  )
}

export default Button

Button.defaultProps = {
  href: undefined
}
