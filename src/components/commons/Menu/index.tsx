import { MenuWrapper } from './styles'
import { Logo } from '../../../theme/Logo/Logo'
import Button from '../Button'
import Text from '../../foundation/Text'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
// import SearchIcon from '@material-ui/icons/Search'
import Image from 'next/image'
import { useState } from 'react'

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
  const [favorite, setFavorite] = useState(false)
  const heartIcon = favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />

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
		<MenuWrapper>
			<MenuWrapper.LeftSide>
					<Logo size='small' />
			</MenuWrapper.LeftSide>

			<MenuWrapper.CentralSide>

			</MenuWrapper.CentralSide>

			<MenuWrapper.RightSide>
			  <input
				  type='text'
					id='busca'
					placeholder='Pesquisar'
				/>

			  <Button
				  ghost
					variant='primary.main'
					padding='6px 8px'
				>
			    <Image
					  layout='fixed'
					  src='/add.png'
						width={32}
						height={32}
						alt='add photos'
					/>
				</Button>

				<Button
				  ghost
					href='/'
					variant='primary.main'
				>
					<HomeIcon />
				</Button>

				<Button
				  variant='primary.main'
					ghost
					onClick={() => setFavorite(!favorite)}
				>
					{heartIcon}
				</Button>

        <Button
				  ghost
					href='/app/profile'
					padding='6px 8px'
				>
				  <Image
					  layout='fixed'
            width={32}
            height={32}
            src={profileImgUrl.url || '/account.png'}
            alt='avatar'
          />
				</Button>

			</MenuWrapper.RightSide>
		</MenuWrapper>
  )
}

export default Menu

Menu.defaultProps = {
  profileMode: false
}
