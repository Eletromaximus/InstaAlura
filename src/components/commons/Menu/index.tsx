import { MenuWrapper } from './styles'
import { Logo } from '../../../theme/Logo/Logo'
import Button from '../Button'
import Text from '../../foundation/Text'

interface IProps {
	onCadastrarClick: () => void;
}

const links = [
  {
    texto: 'Home',
    url: '/'
  },
  {
    texto: 'Perguntas Frequentes',
    url: '/faq'
  },
  {
    texto: 'Sobre',
    url: '/sobre'
  }
]

function Menu ({ onCadastrarClick }: IProps) {
  return (
		<MenuWrapper>
			<MenuWrapper.LeftSide>
					<Logo size='small' />
			</MenuWrapper.LeftSide>

			<MenuWrapper.CentralSide>
				{links.map((link) => {
				  return (
						<li key={link.url}>
							<Text variant="smallestException" href={link.url} >
								{link.texto}
							</Text>
						</li>
				  )
				})}
			</MenuWrapper.CentralSide>

			<MenuWrapper.RightSide>
				<Button ghost href='/app/login' variant="secondary.main">
					Entrar
				</Button>
				<Button variant="primary.main" onClick={onCadastrarClick}>
					Cadastrar
				</Button>
			</MenuWrapper.RightSide>
		</MenuWrapper>
  )
}

export default Menu
