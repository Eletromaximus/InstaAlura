import React, { useContext } from 'react'
import { Button } from '../../../commons/Button'
import { Box } from '../../../foundation/layout/Box'
import { Grid } from '../../../foundation/layout/Grid'
import Text from '../../../foundation/Text'
import { WebsitePagesContext } from '../../../wrappers/WebsitePage'
import { Logo } from '../../../../theme/Logo/Logo'
import LoginForm from '../../../patterns/FormLogin'

export default function LoginScreen () {
  const websitePageContext = useContext(WebsitePagesContext)

  return (
    <Grid.Container
      display="flex"
      flex="1"
      alignItems="center"
    >
      <Grid.Row
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Text
              href="/"
              color="secondary.main"
            >
              <Logo size="large" />
            </Text>
          </Box>
          <LoginForm />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Button
              href="/"
              color="secondary.main"
              onClick={(event) => {
                event.preventDefault()
                websitePageContext.toggleModalCadastro()
              }}
            >
              Cadastre-se
            </Button>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <img
              // align="center"
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}
