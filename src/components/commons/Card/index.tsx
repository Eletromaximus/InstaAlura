import styled from 'styled-components'
import Button from '../Button'
interface ICard {
  propsDoModal: any;
  Close: () => void;
}

const CardStyle = styled.div`
  flex: center;
  width: 375px;
  height: 667px;
  background-color: #FFFFFF;
  border-radius: 8px;
`

export default function Card ({ propsDoModal, Close }: ICard) {
  return (
    <CardStyle id='card'>
      Olá
      <Button>
        Postar
      </Button>
    </CardStyle>
  )
}
