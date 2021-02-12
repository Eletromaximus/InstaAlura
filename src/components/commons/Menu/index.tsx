import { MenuWrapper } from './styles'
import Logo from '../../theme/Logo/Logo'
import { Button } from '../Button/styles'
import Text from '../../fundation/Text'

const links = [
  {
    texto: 'Home',
    url: '/'
  },
  {
    texto: 'Perguntas frequentes',
    url: '/'
  },
  {
    texto: 'Sobre',
    url: '/'
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
              <Text
                tag='a'
                variant='smallestException'
                href={link.url}>
                  {link.texto}
                </Text>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default function Home () {
  return Menu()
}
