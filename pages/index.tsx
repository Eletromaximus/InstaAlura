import {MenuWrapper} from '../src/components/Menu/styles/index'
import Logo from '../src/theme/Logo/Logo'

function Menu() {
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
      },
  ]
  
  return (
  <MenuWrapper>
    <MenuWrapper.LeftSide>
      <Logo />
    </MenuWrapper.LeftSide>
    <MenuWrapper.CentralSide>
      {links.map( link => {
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
      <button>
        Entrar
      </button>
      <button>
        Cadastrar
      </button>
    </MenuWrapper.RightSide>
  </MenuWrapper>
  )
}

export default function Home() {
  return Menu()
}
