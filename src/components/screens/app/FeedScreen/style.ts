import { breakpointsMedia } from '@theme/utils/breakpointsMedia'
import styled, { css } from 'styled-components'

export const FeedBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  background-color: azure;

  ${breakpointsMedia({
    md: css`
      width: 596.82px;
      height: 778.81px;
    `
  })}

`
export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 51px;
  width: 200px;
`
export const BarSuperior = styled.div`
  display: flex; 
  margin: 20px 40px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;


`
