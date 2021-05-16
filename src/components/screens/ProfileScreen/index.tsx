import Bio from './BioBox'
import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'

export { getContent } from './getContent'

interface Posts {
  description: string;
  photourl: string;
  filter: string;
  id: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}
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
    allPosts?: Posts[]
  }
}

export default function ProfileScreen ({ messages }: IProfile) {
  return (

    <Box
      display='flex'
      flexDirection='column'
      justifyContent='start'
      margin='28px'
      marginTop='0'
    >
      {messages &&
      <Bio messages={messages.profile} />}

      <Grid.Col
        offset={{ md: 2, sm: 0 }}
        value={{ md: 10, sm: 12 }}
        style={{
          // marginTop: '72px',
          marginBottom: '100px',
          padding: 0
        }}
      >
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            messages.allPosts &&
            messages.allPosts?.map((post) => {
              return <li
                  key={post.id}
                  style={{
                    marginRight: 32,
                    marginTop: 32
                  }}
                >
                <img
                  src={post.photourl}
                  alt={post.description}
                  width={249}
                  height={249}
                />
              </li>
            })
          }
        </ul>
      </Grid.Col>
    </Box>
    // </WrapperCardContext.Provider>
  )
}
