import { css } from 'styled-components'
import { breakpointsMedia } from './breakpointsMedia'

export default function propToStyle (propName: string) {
  return (props: Record<string, any>) => {
    const propValue = props[propName]

    if (typeof propValue === 'object') {
      return css`
        ${breakpointsMedia({
    ...(propValue.xs && {
      xs: { [propName]: propValue.xs }
    }),
    ...(propValue.sm && {
      sm: { [propName]: propValue.sm }
    }),
    ...(propValue.md && {
      md: { [propName]: propValue.md }
    }),
    ...(propValue.lg && {
      lg: { [propName]: propValue.lg }
    }),
    ...(propValue.xl && {
      xl: { [propName]: propValue.xl }
    })
  })}
      `
    }

    return {
      [propName]: props[propName]
    }
  }
}
