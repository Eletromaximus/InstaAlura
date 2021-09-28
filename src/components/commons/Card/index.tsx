import Button from '../Button'
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
  token: string;
}

const schema = yup.object({
  imgUrl: yup.string()
    .required('Por favor, insira uma url no formato correto')
    // eslint-disable-next-line no-useless-escape
    .matches(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i,
      'Por favor, insirua uma url valida'
    )
    .max(200)
})

export default function Card ({ propsDoModal, Close, token }: ICard) {
  const [buttonUrl, setButtonUrl] = useState(false)
  const [post, setPost] = useState(false)
  const [filter, setFilter] = useState('')
  const [photoUrl, setPhotoUrl] = useState<string>('/imageDefault.svg')
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const description = 'post photo'

  function Clear () {
    setFilter('')
    setButtonUrl(false)
    setPost(false)
    setPhotoUrl('/imageDefault.svg')
    Close()
  }

  useEffect(() => {
    if (errors.imgUrl) {
      setPhotoUrl('/imageDefault.svg')
      setButtonUrl(false)
    }
  }, [errors.imgUrl])

  async function PostPhoto () {
    if (!post) {
      setPost(true)
      return await fetch('/api/post', {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description,
          filter,
          photoUrl
        })
      })
        .then(async (res) => {
          if (res.ok) {
            Clear()
          }
        })
        .catch((err) => {
          throw new Error(err)
        })
    }
  }

  const onSubmit = async (data: any) => {
    if (buttonUrl === false) {
      await fetch(photoUrl, {
        method: 'HEAD'
      })
        .then(res => {
          if (res.ok) {
            setButtonUrl(true)
            setPhotoUrl(data.imgUrl)
          }
        })
        .catch(() => {
          setButtonUrl(false)
          setPhotoUrl('/imageDefault.svg')
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
        onClick={() => {
          return Clear()
        }}
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
        {photoUrl === '/imageDefault.svg'
          ? <Box marginTop='100px'>
            <img
              // layout='fixed'
              width={153.33}
              height={153.33}
              src={photoUrl}
            />
          </Box>
          : <figure
            className={`filter-${filter}`}
            style={{
              padding: 0,
              margin: 0
            }}
          >
            <img
              src={photoUrl}
              height={375}
              width={375}
              alt="" />
          </figure>
        }
      </Box>

      {buttonUrl === false
        ? <FormStyle
          buttomUrl={buttonUrl}
          onSubmit={handleSubmit(onSubmit)}
        >
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

        : <FormStyle
          buttomUrl={buttonUrl}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FiltersCss buttomUrl={buttonUrl}>
            {filterNames.map((filtercss) => {
              return <li key={filtercss.name}>
                <button
                  style={{
                    margin: '0 0 0 16px',
                    padding: 0,
                    border: 'none'
                  }}
                  onClick={() => {
                    setFilter(filtercss.name)
                  }}
                >
                  <figure
                    className={`filter-[${filtercss.filter}]`}
                    style={{ margin: 0, padding: 0 }}
                  >
                    <img
                      // layout='fixed'
                      width={88}
                      height={88}
                      src={photoUrl}
                    />
                  </figure>
                </button>
                <Text
                  variant='smallestException'
                  marginLeft='45%'
                >
                  {filtercss.name}
                </Text>
              </li>
            })}
          </FiltersCss>
          <Button
            width='327px'
            height='44px'
            margin='24px 0 32px 0px'
            padding='0'
            // type='submit'
            disabled={post}
            onClick={() =>
              PostPhoto()
            }
          >
            Postar
          </Button>
        </FormStyle>
      }
    </CardStyle>
  )
}
