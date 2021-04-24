import styled, { css, StyledComponentBase } from 'styled-components'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import { TextStyleVariants } from '../../foundation/Text'

interface IMenu extends StyledComponentBase<any, {}> {
	LeftSide?: any;
	CentralSide?: any;
	RightSide?: any;
}

export const MenuWrapper: IMenu = styled.nav`
	font-family: 'Rubik', sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 18px;
	padding-left: 28px;
	padding-right: 28px;

	${breakpointsMedia({
		md: css`
			margin-top: 32px;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
			padding: 0 16px;
			max-width: 768px;
		`,
		lg: css`
			max-width: 1160px;
		`,
		xl: css`
			max-width: 1222px;
		`
	})}
`

MenuWrapper.LeftSide = styled.div`
	padding: 0;
	margin: 0;
	order: 1;

	${breakpointsMedia({
		md: css`
			width: 131px;
			height: 32px;
			order: initial;
			padding-right: 16px;
		`
	})}
`

MenuWrapper.CentralSide = styled.div`
	margin: 0;
	order: 3;
	width: 100%;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 17px;
	border-top: 1px solid #88989e;
	border-bottom: 1px solid #88989e;
	padding: 12px;

	${breakpointsMedia({
		md: css`
			max-width: 332px;
			flex: 1;
			order: initial;
			border: none;
			padding-top: 0;
			padding-bottom: 0;
		`
	})}
	a {
		text-align: center;
		display: block;
		text-decoration: none;
		color: #88989e;
		transition: 200ms ease-in-out;
		${breakpointsMedia({
			xs: css`
				${TextStyleVariants.smallestException}
			`,
			md: css`
				${TextStyleVariants.paragraph1}
			`
		})}
		&:hover,
    &:focus {
			font-weight: 500;
			color: #070c0e;
		}
	}

`

MenuWrapper.RightSide = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	flex: 1;
	order: 2;
	justify-content: flex-end;

	${breakpointsMedia({
		md: css`
			order: initial;
		`
	})}

	#busca {
		width: 288px;
		height: 44px;
		border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
		border-radius: 12px;
		background-image: url(/images/search.svg);
		background-size: contain;
		background-repeat: no-repeat;
		text-indent: 40px;
	}

	#busca:focus {
		background-image: none;
		text-indent: 0px;
	}
	
`
