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

/* #heart-like {
  display: none;
  position: absolute;
} */


/*:hover, :focus { 
     #heart-like {
      position: absolute;
      width: 50%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    } */

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
export const FigImage = styled.figure`
  padding: 0;
  margin: 0;
  opacity: 1;
  width: 100%;
  height: 510.69px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`
export const DivImage = styled.div`
  display: flex;
`
export const BarInferior = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 514.06px;
  margin: 25.53px 38.2px 102.14px 44.56px;
`
