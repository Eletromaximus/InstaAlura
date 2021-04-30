import Button from '../Button'
import Image from 'next/image'
import CloseIcon from '@material-ui/icons/Close'
import { Box } from '../../foundation/layout/Box'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { CardStyle, FormStyle } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Text from '../../foundation/Text'
interface ICard {
  propsDoModal: any;
  Close: () => void;
}

interface IForm {
  imgUrl: string
}

const schema = yup.object().shape({
  imgUrl: yup.string().required('Por favor, insira uma url no formato correto')
})

const onSubmit = (data: any) => console.log(data)

export default function Card ({ propsDoModal, Close }: ICard) {
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>({
    resolver: yupResolver(schema)
  })
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

      <Box
        display='flex'
        width= '375px'
        height= '375px'
        justifyContent= 'center'
        backgroundColor='#D4D4D4'
      >
        <Box marginTop='100px'>
          <Image
            layout='fixed'
            width={153.33}
            height={153.33}
            src='/imageDefault.svg'
          />
        </Box>
      </Box>

      <FormStyle action='/api/post' onSubmit={handleSubmit(onSubmit)}>
        <input
          id='imgUrl'
          type='text'
          placeholder='Url da imagem'
          {...register('imgUrl')}
        />

        <Button
          backgroundColor='#FB7B6B'
          width='48px'
          height='48px'
          color='white'
          type='submit'
        >
          <ArrowForwardIcon />
        </Button>
      </FormStyle>
      {errors.imgUrl &&
        <Text
          marginLeft='50px'
          variant='paragraph2'
          color='primary.main'
        >
          {errors.imgUrl?.message}
        </Text>
      }
      <Text
        tag='span'
        marginLeft='50px'
        marginTop='8px'
        marginBottom='38px'
        variant='paragraph2'
        padding='0'
        color='tertiary.light'
      >
        Formatos suportados: jpg, png, svg e xpto.
      </Text>

      <Button
        marginLeft='25px'
        width='327px'
        height='44px'
        type='submit'
      >
        Avançar
      </Button>
    </CardStyle>
  )
}
