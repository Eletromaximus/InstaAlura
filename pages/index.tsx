import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer/styles'
import Text from '../src/components/fundation/Text'
import Button from '../src/components/commons/Button/styles'
import { Grid } from '../src/components/fundation/layout'

export default function Home () {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Menu />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
          >
            <Text
              variant='Title'
              tag='h1'
              color="tertiary.main"
              textAlign="center"
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant='paragraph1'
              tag='p'
              color='tertiary.light'
              textAlign={{
                xs: 'center',
                md: 'center'
              }}
            >
              aslkdjfasjdfaçsljdfasçljfdaslfjlsakfjsaldjfasçlfjaslfj
              açslfjlaçskfdjaskljfalksfjaslçkfjsklajfdasjf
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial'
              }}
              display='block'
            >
              Cadastrar
            </Button>
            </Grid.Col>
            <Grid.Col
              value={{
                xs: 12,
                md: 6
              }}
            >
            <img src="https://placehold.it/400x400" alt=""/>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </div>
  )
}
