import Bio from './BioBox'
import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'
import { ImgStyle, ListStyle } from './style'
import Button from '../../commons/Button'

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
      margin='0'
      marginTop='64px'
    >
      <Grid.Col
        offset={{ md: 2, sm: 0 }}
        value={{ md: 9, sm: 12 }}
        style={{
          marginBottom: '100px',
          padding: 0
        }}
      >
        {messages &&
          <Bio messages={messages.profile}/>
        }

        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            messages.allPosts &&
            messages.allPosts?.map((post) => {
              return <ListStyle
                  key={post.id}
                >
                  <Button
                    href={post.id}
                    margin='0'
                    padding='0'
                    ghost
                  >
                    <figure className={`filter-[${post.filter}]`}
                      style={ { margin: 0, padding: 0 }}
                    >
                      <ImgStyle
                        src={post.photourl}
                        alt={post.description}
                      />
                    </figure>
                  </Button>
              </ListStyle>
            })
          }
        </ul>
      </Grid.Col>
    </Box>
    // </WrapperCardContext.Provider>
  )
}
