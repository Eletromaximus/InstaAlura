import styled, { css } from 'styled-components'

interface IForm {
  buttomUrl: boolean;
}

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 375px;
  height: 667px;
  background-color: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
`

export const FormStyle = styled.form<IForm>`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  

  ${({ buttomUrl }) => {
    if (buttomUrl) {
      return css`
        width: 100%
        height: 100%
      `
    } else {
      return css`
        width: 327px;
        height: 156px;
        margin-bottom: 32px;
        margin-top: 48px;
      `
    }
  }}
  

  #imgUrl {
    height: 46px;
    width: 280px;
    border: none;
    border-radius: 9px;
    text-indent: 10px
  }

  #imgUrl:focus {
    outline: none;
  }
  
`
export const FiltersCss = styled.ul<IForm>`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
  margin: 24px 0 0px 24px;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  
  ${({ buttomUrl }) => {
    if (buttomUrl) {
      return css`
        margin-left: 0;
        padding: 0;
      `
    } else {
      return css`
        margin: 24px 0 0px 24px;
      `
    }
  }}
  li {
    // overflow: hidden;
    scroll-snap-align: start;
    figure {
      margin: 0 20px 0px 0;
    }
  }
  

`
