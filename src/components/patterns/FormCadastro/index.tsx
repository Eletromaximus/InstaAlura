import { Box } from '@xstyled/styled-components'
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Lottie } from '@crello/react-lottie'
import sucessAnimation from './animation/sucess.json'
import Button from '../../commons/Button/styles'
import TextField from '../../Forms/TextField'
import { Grid } from '../../fundation/layout/Grid'
import Text from '../../fundation/Text'

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR'
}
function FormContent () {
  const [isFormSubmited, setIsFormSubmited] = useState(false)
  const [submissionStates, setSubmissionStates] = useState(formStates.DEFAULT)
  const [userInfo, setUserInfo] = useState({
    usuario: 'maxmilliano',
    nome: 'maximusmeridius'
  })

  function handleChange (event: any) {
    const fieldName = event.target.getAttribute('name')
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value

    })
  }

  const isFomInvalid = userInfo.usuario.length === 0 || userInfo.nome.length === 0
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        setIsFormSubmited(true)

        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.nome
        }

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'Post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userDTO)
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json()
            }
            throw new Error(' Não foi possível cadastrar o usuário agora :(')
          })
          .then(() => {
            setSubmissionStates(formStates.DONE)
          })
          .catch(() => {
            setSubmissionStates(formStates.ERROR)
          })
          .finally(() => {

          })
      }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder='Nome'
          type="text"
          name='nome'
          onChange={handleChange}
          value={userInfo.nome}
        />
      </div>

      <div>
        <TextField
          placeholder='Usuário'
          type="text"
          name='usuario'
          onChange={handleChange}
          value={userInfo.usuario}
        />
      </div>

      <Button
        variant='primary.main'
        type='submit'
        disabled={isFomInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStates === formStates.DONE && (
        <Box
          display='flex'
          justifyContent='center'
        >
          <Lottie
            width='150px'
            height='150px'
            className='lottie-container basic'
            config={{ animationData: sucessAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )
      }

      {isFormSubmited && submissionStates === formStates.ERROR && (
        <p>Deu tudo Errado </p>)
      }
    </form>
  )
}

export default function FormCadastro ({ propsDoModal }: any) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent='flex-end'
    >
      <Grid.Col
        display='flex'
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow='-10px 0px 24px rgba(7, 12, 14, 0.1)'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          flex={1}
          padding={{
            xs: '16px',
            md: '85px'
          }}
          backgroundColor='white'
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>

  )
}
