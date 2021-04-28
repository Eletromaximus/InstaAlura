import styled from 'styled-components'
import Button from '../Button'
import Image from 'next/image'
import CloseIcon from '@material-ui/icons/Close'
import { Box } from '../../foundation/layout/Box'
interface ICard {
  propsDoModal: any;
  Close: () => void;
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 375px;
  height: 667px;
  background-color: #FFFFFF;
  border-radius: 8px;
`

export default function Card ({ propsDoModal, Close }: ICard) {
  return (
    <CardStyle
      id='card'
      {...propsDoModal}
    >
      <Button
        marginLeft='310px'
        width='12px'
        ghost
        color='#88989E'
        onClick={Close}
      >
        <CloseIcon />
      </Button>

      <Button
        ghost
        display='flex'
        width= '375px'
        height= '375px'
        justifyContent= 'center'
        style={{
          backgroundColor: '#D4D4D4'
        }}
      >
        <Box marginTop='100px'>
          <Image
            layout='fixed'
            width={153.33}
            height={153.33}
            src='/imageDefault.svg'
          />
        </Box>
      </Button>

      <ul
        style={{
          padding: '24px 16px auto 24px',
          width: '88px',
          height: '88px'
        }}
      >
      </ul>
      <Button>
        Postar
      </Button>
    </CardStyle>
  )
}
