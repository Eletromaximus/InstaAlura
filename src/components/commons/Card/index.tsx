import styled from 'styled-components'
import Button from '../Button'
import Image from 'next/image'
import { Box } from '../../foundation/layout/Box'
import CloseIcon from '@material-ui/icons/Close'
interface ICard {
  propsDoModal: any;
  Close: () => void;
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 375px;
  height: 667px;
  background-color: #FFFFFF;
  border-radius: 8px;
`

export default function Card ({ propsDoModal, Close }: ICard) {
  return (
    <CardStyle id='card'>
      <Button
        marginLeft='310px'
        width='12px'
        ghost
        color='#88989E'
      >
        <CloseIcon />
      </Button>
      <Box
        layout='fixed'
        display='flex'
        justifyContent='center'
        style={{
          // marginTop: '56px',
          width: '375px',
          height: '375px',
          backgroundColor: '#D4D4D4'
        }}
        {...propsDoModal}
      >
        <Image
          width={153.33}
          height={153.33}
          src='/imageDefault.svg'
        />
      </Box>
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
