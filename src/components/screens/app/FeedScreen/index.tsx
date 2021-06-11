import { FeedBox, Avatar, BarSuperior } from './style'
import Image from 'next/image'
import { Grid } from '@components/foundation/layout/Grid'
import Text from '@components/foundation/Text'

export { getContent } from './getContent'

export interface Posts {
  description: string;
  photourl: string;
  filter: string;
  id: string;
  user: string;
  createdAt: string;
  updatedAt: string;
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
  }
}

export default function FeedScreen ({ messages }: IProfile) {
  return (
    <Grid.Col
      value={{
        md: 12
      }}
      offset={{
        md: 2
      }}
    >
      <FeedBox>
        <BarSuperior>
          <Avatar>
            <Image
              width={51}
              height={51}
              src={messages.profile.avatarImage.url}
              alt='Avatar image'
              layout='intrinsic'
            />

            <Text
              variant='subtitle'
            >
              {messages.profile.name}
            </Text>
          </Avatar>
          <Text
            variant='title'
          >
            ...
          </Text>
        </BarSuperior>
      </FeedBox>
    </Grid.Col>

  )
}
