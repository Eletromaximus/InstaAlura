import { MenuWrapper } from '../src/components/commons/Menu/index'
import Logo from '../src/theme/Logo/Logo'
import { Button } from '..//src/components/commons/Button'

function Menu () {
  const links = [
    {
      texto: 'Home',
      url: '/',
      id: 0
    },
    {
      texto: 'Perguntas frequentes',
      url: '/',
      id: 1
    },
    {
      texto: 'Sobre',
      url: '/',
      id: 2
    }
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(link => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.texto}
              </a>
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
