import { Grid } from '@components/foundation/layout/Grid'
import CardFeed from '@components/CardFeed'
import { ListFeed } from './style'

export { getContent } from './getContent'

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
    <Grid.Col
      value={{
        md: 12
      }}
      offset={{
        md: 2
      }}
    >
      <ListFeed>
        {
          messages.allPosts.map((post: Posts) => {
            return <li
              key={Number(post.id)}
            >
              {CardFeed({
                id: post.id,
                filter: post.filter,
                likes: Boolean(post.likes),
                likeNumbers: post.likes,
                profileName: messages.profile.name,
                profileUrl: messages.profile.avatarImage.url,
                url: post.photourl,
                token: token
              })}
            </li>
          })
        }
      </ListFeed>
    </Grid.Col>

  )
}
