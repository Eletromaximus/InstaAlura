import { MenuWrapper } from './styles';
import Logo from '../../theme/Logo/Logo';
import Button from '../Button';

interface IProps {
	onCadastrarClick: () => void;
}

const links = [
	{
		texto: 'Home',
		url: '/home',
	},
	{
		texto: 'Perguntas Frequentes',
		url: '/faq',
	},
	{
		texto: 'Sobre',
		url: '/sobre',
	},
];

function Menu({ onCadastrarClick }: IProps) {
	return (
		<MenuWrapper>
			<MenuWrapper.LeftSide>
				<Logo />
			</MenuWrapper.LeftSide>

			<MenuWrapper.CentralSide>
				{links.map((link) => {
					return (
						<li key={link.url}>
							<Button variant="smallestException" href={link.url}>
								{link.texto}
							</Button>
						</li>
					);
				})}
			</MenuWrapper.CentralSide>

			<MenuWrapper.RightSide>
				<Button ghost variant="secondary.main">
					Entrar
				</Button>
				<Button variant="primary.main" onClick={onCadastrarClick}>
					Cadastrar
				</Button>
			</MenuWrapper.RightSide>
		</MenuWrapper>
	);
}

export default Menu;
