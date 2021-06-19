import { MiniCard } from './style'
import Text from '@components/foundation/Text'
import Button from '@components/commons/Button'
import GitHubIcon from '@material-ui/icons/GitHub'

interface ICard {
  avatarUrl: string;
  name: string;
  src: string;
}
export default function CardInformation (params: ICard) {
  return (
    <MiniCard>
      <div>
        <img
          src={params.avatarUrl}
          width={64}
          height={64}
          alt='imagem do avatar pessoal'
        />
        <Text
          variant='paragraph1'
          marginLeft='10px'
        >
          {params.name}
        </Text>
      </div>
      <div>
        <GitHubIcon />
        <Button
          ghost
          color='#FB7B6B'
          paddingLeft='0'
          href={params.src}
        >
          <Text>
            Github
          </Text>
        </Button>
      </div>
    </MiniCard>
  )
}
