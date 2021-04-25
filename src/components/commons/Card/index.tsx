import styled from 'styled-components'

interface ICard {
  propsDoModal: any;
  Close: () => void;
}

const CardStyle = styled.div`
  width: 375px;
  height: 667px;
  color: #FFFFFF;
`

export default function Card ({ propsDoModal, Close }: ICard) {
  return (
    <CardStyle>
      Olá
    </CardStyle>
  )
}
