import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer'
import Text from '../src/components/fundation/Text'
import Button from '../src/components/commons/Button'
import { Grid } from '../src/components/fundation/layout/Grid'
import { Box } from '../src/components/fundation/layout/Box'
import { useState } from 'react'
import Modal from '../src/components/commons/Modal'
import FormCadastro from '../src/components/patterns/FormCadastro'
import SEO from '../src/components/commons/SEO'
export default function Home () {
  const [isModalOpen, setIsModalState] = useState(false)

  return (
		<Box
			flex="1"
			display="flex"
			flexWrap="wrap"
			flexDirection="column"
			justifyContent="space-between"
			backgroundImage="url(/images/bubbles.svg)"
			backgroundRepeat="no-repeat"
			backgroundPosition="bottom right"
		>
			<SEO headTitle='Home'/>

			<Modal
				isOpen={isModalOpen}
				onClose={() => {
				  setIsModalState(false)
				}}>
				{(propsDoModal: any) => (
					<FormCadastro
						propsDoModal={propsDoModal}
						Close={() => setIsModalState(false)}
					/>
				)}
			</Modal>

			<Menu onCadastrarClick={() => setIsModalState(true)} />

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
							onClick={() => setIsModalState(!isModalOpen)}>
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
			<Footer />
		</Box>
  )
}
