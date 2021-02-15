import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer/styles'
import Text from '../src/components/fundation/Text'
import Button from '../src/components/commons/Button/styles'

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
        <div>
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
              md: 'left'
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
        </div>
      <Footer />
    </div>
  )
}
