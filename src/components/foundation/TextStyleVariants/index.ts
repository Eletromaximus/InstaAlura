import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import { css } from 'styled-components'

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
