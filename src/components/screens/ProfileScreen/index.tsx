import Bio from './BioBox'
import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'
export { getContent } from './getContent'

interface IProfile {
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
  allPosts: {
    description: string;
    photourl: string;
    filter: string;
    id: string;
    user: string;
    createdAt: string;
    updatedAt: string;
  }
  }
}

export default function ProfileScreen ({ messages } : IProfile) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      margin='28px'
    >
      <Bio messages={messages.profile} />

      <Grid.Row
        marginLeft={279}
        marginTop={50}
        style={{
          width: 808,
          backgroundColor: 'blue'
        }}
      >
        olá
      </Grid.Row>
    </Box>
  )
}
