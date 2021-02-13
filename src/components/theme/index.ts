import { typographyVariants } from './typographyVariants'
import breakpoints from './breakpoints'
import colors from './colors'

const theme = {
  fontFamily: '\'Rubik\', sans-serif',
  colors,
  borderRadius: '8px',
  typographyVariants,
  breakpoints,
  transition: '200ms ease-in-out'

}

type ThemeType = typeof theme;

export type { ThemeType }
export default theme
