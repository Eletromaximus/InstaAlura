import { Grid } from '@components/foundation/layout/Grid'
import CardFeed from '@components/CardFeed'
import { AsideContatos, ListFeed } from './style'
import CardInformation from './CardInformation'
import Text from '@components/foundation/Text'

export { getContent } from './getContent'

const meusDados = {
  name: 'Max Milliano',
  portifolio: 'https://portifolio-maxmillianox.vercel.app/',
  avatar: 'https://avatars.githubusercontent.com/u/60040859?v=4'
}

const instaFriends = [
  {
    name: 'Camila Cruz',
    portifolio: 'https://portfolio-alura-camila-cruz.vercel.app/',
    avatar: 'https://avatars.githubusercontent.com/u/21296708?v=4'
  },
  {
    name: 'Luciano Ribeiro',
    portifolio: 'https://portifolio-lucianowribeiro.vercel.app/',
    avatar: 'https://avatars.githubusercontent.com/u/22648392?v=4'
  },
  {
    name: 'Ricardo Oliveria',
    portifolio: 'https://portfolio-ricardooliveirafilho.vercel.app/',
    avatar: 'https://avatars.githubusercontent.com/u/2540737?v=4'
  },
  {
    name: 'Rene Sena',
    portifolio: 'https://portfolio-renesena.vercel.app/',
    avatar: 'https://avatars.githubusercontent.com/u/36897083?v=4'
  }
]
interface IFriends {
  name: string;
  portifolio: string;
  avatar: string;
}
export interface Posts {
  description: string;
  photourl: string;
  filter: string;
  id: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
}
export interface IProfile {
  messages: {
    profile: {
    name: string;
    bio: string;
    seguindo: number;
    seguidores: number;
    publicaEs: number;
    avatarImage: {
      url: string;
    }
  },
    allPosts: Posts[]
  },
  token: string
}

export default function FeedScreen ({ messages, token }: IProfile) {
  return (
    <Grid.Container
      marginTop='26px'
      marginLeft='177px'
    >
      <Grid.Row>
        <ListFeed>
          {
            messages.allPosts.map((post: Posts) => {
              return <li
                key={Number(post.id)}
              >
                {CardFeed({
                  id: post.id,
                  filter: post.filter,
                  likeInitial: Boolean(post.likes),
                  profileName: messages.profile.name,
                  profileUrl: messages.profile.avatarImage.url,
                  url: post.photourl,
                  token: token
                })}
              </li>
            })
          }
        </ListFeed>
        <AsideContatos>
          <CardInformation
            name={meusDados.name}
            avatarUrl={meusDados.avatar}
            src={meusDados.portifolio}
          />
          <div id='projetos-da-galera'>
            <Text>
              Projetos da Galera
            </Text>

          </div>

          <ul>
            {instaFriends.map((friend: IFriends) => {
              return (
                <li key={friend.name}>
                  <CardInformation
                    avatarUrl={friend.avatar}
                    name={friend.name}
                    src={friend.portifolio}
                  />
                </li>
              )
            })}
          </ul>

        </AsideContatos>

      </Grid.Row>
    </Grid.Container>
  )
}
