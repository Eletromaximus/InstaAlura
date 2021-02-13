import { css, FlattenSimpleInterpolation } from 'styled-components'
import breakpoints from '../breakpoints'

export function breakpointsMedia (
  cssByBreakpoint: Record<string, FlattenSimpleInterpolation>
) {
  const breakpointNames = Object.keys(breakpoints)

  return breakpointNames
    .filter(breakpointName => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      breakpointName => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `
    )
}
