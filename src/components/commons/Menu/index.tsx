import { MenuWrapper } from './styles'
import Logo from '../../theme/Logo/Logo'
import Button from '../Button/styles'
import Link from '../../fundation/Link/index'

const links = [
  {
    texto: 'Home',
    url: '/home'
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

function Menu () {
  return (
    <MenuWrapper>

      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
      {links.map(link => {
        return (
          <li key={link.url}>
            <Link
              variant='smallestException'
              href={link.url}>
                {link.texto}
            </Link>
          </li>

        )
      })}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button ghost variant='secondary.main'>
          Entrar
        </Button>
        <Button variant='primary.main'>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>

    </MenuWrapper>
  )
}

export default Menu
