import Button from '../Button'
import Image from 'next/image'
import CloseIcon from '@material-ui/icons/Close'
import { Box } from '../../foundation/layout/Box'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { CardStyle, FormStyle, FiltersCss } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Text from '../../foundation/Text'
import { useEffect, useState } from 'react'
import filterNames from './filterNames'

interface ICard {
  propsDoModal: any;
  Close: () => void;
}

const schema = yup.object().shape({
  imgUrl: yup.string()
    .required('Por favor, insira uma url no formato correto')
    // eslint-disable-next-line no-useless-escape
    .matches(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i,
      'Por favor, insirua uma url valida'
    )
    .max(100)
})

export default function Card ({ propsDoModal, Close }: ICard) {
  const [buttonUrl, setButtonUrl] = useState(false)
  const [imageUrl, setImageUrl] = useState('/imageDefault.svg')
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (errors.imgUrl) {
      setImageUrl('/imageDefault.svg')
      setButtonUrl(false)
    }
  }, [errors.imgUrl])

  const onSubmit = async (data: any) => {
    if (buttonUrl === false) {
      await fetch(imageUrl, {
        method: 'HEAD'
      })
        .then(res => {
          if (res.ok) {
            setButtonUrl(true)
            setImageUrl(data.imgUrl)
          }
        })
    }
  }

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
        {imageUrl === '/imageDefault.svg'
          ? <Box marginTop='100px'>
            <Image
              layout='fixed'
              width={153.33}
              height={153.33}
              src={imageUrl}
            />
          </Box>
          : <Image
            layout='fixed'
            width={375}
            height={375}
            src={imageUrl}
          />
        }
      </Box>

      {buttonUrl === false
        ? <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <Box
              display='flex'
              width='327px'
              height='48px'
              flexDirection='row'
              justifyContent='space-between'
              border= '1px solid #88989E'
              borderRadius= '9.25px'
            >
              <input
                id='imgUrl'
                type='text'
                placeholder='Url da imagem'
                {...register('imgUrl')}
              />

              <Box
                display='flex'
                backgroundColor='#FB7B6B'
                width='47px'
                height='47px'
                justifyContent='center'
                style={{ borderRadius: '8px' }}
              >
                <div style={{ marginTop: '25%' }}>
                  <ArrowForwardIcon />
                </div>
              </Box>
            </Box>

            {errors.imgUrl &&
              <Text
                marginLeft='28px'
                variant='paragraph2'
                color='primary.main'
              >
                {errors.imgUrl?.message}
              </Text>
            }

            <Text
              name='formatAllowed'
              tag='span'
              marginTop='8px'
              marginBottom='38px'
              marginLeft='28px'
              variant='paragraph2'
              padding='0'
              color='tertiary.light'
            >
              Formatos suportados: jpg, png, svg e xpto.
            </Text>
            <Button
              width='327px'
              height='44px'
              type='submit'
              disabled={Boolean(errors.imgUrl)}
            >
              Avançar
            </Button>
          </FormStyle>

        : <>
          <FiltersCss>
            {filterNames.map((filter) => {
              return <li key={filter.name}>
                <figure className={`filter-[${filter.filter}]`}>
                  <Image
                    layout='fixed'
                    width={88}
                    height={88}
                    src={imageUrl}
                  />
                </figure>
                <Text
                  variant='smallestException'
                  color='black'
                  marginLeft='25%'
                >
                  {filter.name}
                </Text>
              </li>
            })}
          </FiltersCss>
          <Button
            margin='24px 24px 32px 24px'
          >
            Postar
          </Button>
        </>
      }
    </CardStyle>
  )
}
