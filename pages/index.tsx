import Text from '../src/components/foundation/Text'
import Button from '../src/components/commons/Button'
import { Grid } from '../src/components/foundation/layout/Grid'
import { useContext } from 'react'
import { WebsitePagesContext } from '../src/components/wrappers/WebsitePage'
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc'

function HomeScreen () {
  const websitePageContext = useContext(WebsitePagesContext)
  return (
		<Grid.Container
				marginTop={{
				  xs: '32px',
				  md: '75px'
				}}>
				<Grid.Row>
					<Grid.Col
						offset={{ xs: 0, md: 1 }}
						value={{ xs: 12, md: 5 }}
						display="flex"
						alignItems="flex-start"
						justifyContent="center"
						flexDirection="column">
						<Text
							variant="Title"
							tag="h1"
							color="tertiary.main"
							textAlign={{
							  xs: 'center',
							  md: 'left'
							}}>
							Compartilhe momentos e conecte-se com amigos
						</Text>

						<Text
							variant="paragraph1"
							tag="p"
							color="tertiary.light"
							textAlign={{
							  xs: 'center',
							  md: 'left'
							}}>
							aslkdjfasjdfaçsljdfasçljfdaslfjlsakfjsaldjfasçlfjaslfj
							açslfjlaçskfdjaskljfalksfjaslçkfjsklajfdasjf
						</Text>

						<Button
							variant="primary.main"
							margin={{
							  xs: 'auto',
							  md: 'initial'
							}}
							display="block"
							onClick={() => websitePageContext.toggleModalCadastro()}>
							Cadastrar
						</Button>
					</Grid.Col>

					<Grid.Col
						value={{
						  xs: 12,
						  md: 6
						}}>
						<img
							src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
							alt="Imagem Aplicativo"
							style={{ display: 'block', margin: 'auto' }}
						/>
					</Grid.Col>
				</Grid.Row>
			</Grid.Container>
  )
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home'
    },
    pageBoxProps: {
      justifyContent: 'space-Between',
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right'
    }
    // menuProps: {true}
  }
})
