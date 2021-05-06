import styled from 'styled-components'

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 375px;
  height: 667px;
  background-color: #FFFFFF;
  border-radius: 8px;
`
export const FormStyle = styled.form`
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 327px;
  height: 48px;
  border: 1.15601px solid #88989E;
  border-radius: 9.25px;
  box-sizing: border-box;
  margin-top: 48px;

  #imgUrl {
    flex-grow: 2;
    border: none;
    border-radius: 9.25px;
    text-indent: 10px;
  }

  #imgUrl:focus {
    outline: none;
  }
`
