import styled from 'styled-components'

export const ListFeed = styled.ul`
  list-style: none;
  margin: 0%;

  li {
    :not(:first-child) {
      padding-top: 26px;
    }
  }
`
export const AsideContatos = styled.aside`
  width: 364px;
  margin-left: 57px;

  #projetos-da-galera {
    margin-top: 48px;
    margin-bottom: 24px;
  }

  ul {
    padding: 0;

    li{
      list-style: none;
      padding-bottom: 24px;
    }

  }
`
