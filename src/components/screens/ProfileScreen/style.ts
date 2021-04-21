
import styled, { css, StyledComponentBase } from 'styled-components'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'

interface IBioBox extends StyledComponentBase<any, {}> {
	Bio?: any;
	Infos?: any;
	Avatar?: any;
}

export const BioBox: IBioBox = styled.div`
  width: 592px;
  height: 188px;
  display: flex;
  //flex-direction: row;
  padding: 0;
  margin: 0;
  justify-Content: 'space-between';
`
BioBox.Avatar = styled.div`
  margin: 0;
  padding: 0;

  ${breakpointsMedia({
    md: css`
      width: 188px;
      height: 188px;
    `,
    xs: css`
      width: 88px;
      height: 88px;
    `
  })}

`

BioBox.Infos = styled.div`
  width: 330px;
  height: 100%;
  margin: 0;
  padding: 0;

  #conexoes {
    margin-top: 18px;
    display: flex;
    justify-Content: 'flex-end';
  }

  #name {
    margin-top: 18px;
    display: flex;
    justify-Content: 'center';
  }

  ${breakpointsMedia({
    md: css`
      margin-left: 74px;
    `,
    xs: css`
      margin-left: 40px
    `
  })}
`
