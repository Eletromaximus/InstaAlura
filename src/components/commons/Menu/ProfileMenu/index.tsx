import { MenuWrapper } from './style'
import { Logo } from '../../../../theme/Logo/Logo'
import Button from '../../Button'
import Image from 'next/image'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { useContext, useState } from 'react'
import { WebsitePagesContext } from '../../../wrappers/WebsitePage'

interface IProfileMenu {
  profileImgUrl: string
}

export default function ProfileMenu ({ profileImgUrl }: IProfileMenu) {
  const [favorite, setFavorite] = useState(false)
  const heartIcon = favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />
  const websitePagesContext = useContext(WebsitePagesContext)

  return (
    <MenuWrapper>
			<MenuWrapper.LeftSide>
					<Logo size='small' />
			</MenuWrapper.LeftSide>

			<MenuWrapper.CentralSide />

			<MenuWrapper.RightSide>
			  <input
				  type='text'
					id='busca'
					placeholder='Pesquisar'
          alt='search'
				/>

			  <Button
				  ghost
					variant='primary.main'
					padding='6px 8px'
          onClick={() => websitePagesContext.toggleModalCadastro()}
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
          id='homeButton'
				>
					<HomeIcon />
				</Button>

				<Button
				  variant='primary.main'
					ghost
					onClick={() => setFavorite(!favorite)}
          id='favorite'
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
            src={profileImgUrl || '/account.png'}
            alt='avatar'
          />
				</Button>

			</MenuWrapper.RightSide>
		</MenuWrapper>
  )
}
