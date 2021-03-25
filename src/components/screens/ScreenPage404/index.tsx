import styled from 'styled-components'
import { Grid } from '../../foundation/layout/Grid'

const ErrorBase = styled.main`

$bg: #313942;
$ghost: #528cce;
$heading: #e7ebf2;

h1 {
  color: $heading;
  font-size: 12.5rem;
  letter-spacing: .10em;
  margin: .025em 0;
  text-shadow: .05em .05em 0 rgba(0,0,0,.25);
  white-space: nowrap;
  
  @media(max-width: 30rem) {
    font-size: 8.5rem;
  }
  
  & > span {
    animation: spooky 2s alternate infinite linear;
    color: $ghost;
    display: inline-block;
  }
}

h2 {
  color: $heading;
  margin-bottom: .40em;
}

p {
  color: #ccc;
  margin-top: 0;
}

@keyframes spooky {
  from {
    transform: translatey(.15em) scaley(.95);
  }
  
  to {
    transform: translatey(-.15em);
  }
}
`

export default function Page404 () {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col
        offset={{ xs: 0, md: 4 }}
        value={{ xs: 12, md: 6 }}
        justifyContent='flex-end'
        >
          <ErrorBase>
            <h1>4<span>0</span>4</h1>
            <h2>Error: 404 página não encontrada</h2>
            <p>Desculpe, a página que você procura não está disponível</p>
          </ErrorBase>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}
