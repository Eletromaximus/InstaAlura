import { MenuWrapper } from './styles'
import { Logo } from '../../../theme/Logo/Logo'
import Button from '../Button'
import Text from '../../foundation/Text'
import ProfileMenu from './ProfileMenu'
interface IProps {
	onCadastrarClick: () => void;
	profileMode: boolean;
	profileImgUrl?: {
		url: string
	};
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

function Menu ({ onCadastrarClick, profileImgUrl }: IProps) {
  if (!profileImgUrl?.url) {
    return (
			<MenuWrapper>
				<MenuWrapper.LeftSide>
						<Logo size='small' />
				</MenuWrapper.LeftSide>

				<MenuWrapper.CentralSide>
					{links.map((link) => {
					  return (
							<li key={link.url}>
								<Text variant='smallestException' href={link.url} >
									{link.texto}
								</Text>
							</li>
					  )
					})}
				</MenuWrapper.CentralSide>

				<MenuWrapper.RightSide>
					<Button ghost href='/app/login' variant='secondary.main'>
						Entrar
					</Button>
					<Button variant='primary.main' onClick={onCadastrarClick}>
						Cadastrar
					</Button>
				</MenuWrapper.RightSide>

		</MenuWrapper>
    )
  }
  return (
		<ProfileMenu profileImgUrl={profileImgUrl} />
  )
}

export default Menu

Menu.defaultProps = {
  profileMode: false
}
