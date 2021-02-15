import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia'
import propToStyle from '../../theme/utils/propToStyle'

interface IProps {
  offset?: number | object;
  value?: number | object;
  flex?: string | object;
  display?: string | object;
  flexDirection?: string | object;
  alignItems?: string | object;
  justifyContent?: string | object;
}

export const Container = styled.div`
  width: 100%;
  padding: 0 28px;
 // padding-left: 28px;
  margin-right: auto;
  margin-left: auto;
  max-width: initial; 

  ${breakpointsMedia({
    xs: css`
    max-width: initial;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  `,
  sm: css`
    max-width: 576px;
  `,
  md: css`
      max-width: 768px;
      padding-right: 1rem
      padding-left: 1rem
    `,
  lg: css`
    max-width: 1160px;
  `,
  xl: css`
    max-width: 1222px;
  `
  })}

  ${propToStyle('marginTop')}
`
export const Grid = {
  Container,
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
  `,
  Col: styled.div<IProps>`
    padding-right: 16px;
    padding-left: 16px;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    ${({ value }: number | any) => {
      if (typeof value === 'number') {
        return css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value) / 12}%;
          max-width: ${(100 * value) / 12}%;
        `
      }

      return breakpointsMedia({
        ...(value.xs && {
          xs: css`
            flex: 0 0 ${(100 * value.xs) / 12}%;
            max-width: ${(100 * value.xs) / 12}%;
          `
        }),
        ...(value.sm && {
          sm: css`
            flex: 0 0 ${(100 * value.sm) / 12}%;
            max-width: ${(100 * value.sm) / 12}%;
          `
        }),
        ...(value.md && {
          md: css`
            flex: 0 0 ${(100 * value.md) / 12}%;
            max-width: ${(100 * value.md) / 12}%;
          `
        }),
        ...(value.lg && {
          lg: css`
            flex: 0 0 ${(100 * value.lg) / 12}%;
            max-width: ${(100 * value.lg) / 12}%;
          `
        }),
        ...(value.xl && {
          xl: css`
            flex: 0 0 ${(100 * value.xl) / 12}%;
            max-width: ${(100 * value.xl) / 12}%;
          `
        })
      })
    }}

    ${({ offset }: any) => {
      if (typeof offset === 'number') {
        return css`
          margin-left: ${(100 * offset) / 12}%
        `
      }
    }}
  `

}
