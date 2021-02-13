import breakpoints from '../breakpoints'

export default function breakpointsMedia (cssByBreakpoints: Record<string, any>) {
  const breakpointsNames = Object.keys(cssByBreakpoints)

  return breakpointsNames.map((breakpointsName) => {
    return `
      @media screen and (min-width: ${breakpoints[breakpointsName]}px){
        ${cssByBreakpoints[breakpointsName]}
      }
    `
  }).join('')
}
