import styled from 'styled-components'

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
export const FormStyle = styled.form`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 327px;
  height: 156px;
  box-sizing: border-box;
  margin-bottom: 32px;
  margin-top: 48px;
  

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
export const FiltersCss = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
  margin: 24px 0 0px 24px;
  /* overflow: hidden; */

  figure {
    margin: 0 20px 0px 0;
  }

`
