import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'
import Image from 'next/image'
import Text from '../../foundation/Text'

export { getContent } from './getContent'

interface IProfile {
  messages: {
    name: string;
    bio: string;
    seguindo: number;
    seguidores: number;
    publicaEs: number;
    avatarImage: {
      url: string
    }
  }
}

export default function ProfileScreen ({ messages } : IProfile) {
  return (
    <Box
      display='flex'
      justifyContent='center'
      margin='28px'
    >
      <Box
        width='592px'
        height='188px'
        display='flex'
        padding='0'
        margin='0'
        justifyContent='space-between'
        id='bio'
      >
        <Box
          margin='0'
          padding='0'
          id='avatar'
        >
          {messages.avatarImage.url && <Image
            width='188px'
            height='188px'
            src={messages.avatarImage.url}
            alt='avatar'
          />}
        </Box>

        <Box
          width='330px'
          height='100%'
        >
          <Grid.Row
            display= 'flex'
            justifyContent= 'flex-end'
            style={{
              width: '100%',
              height: 'auto',
              margin: 0,
              marginTop: '18px'
            }}
            id='conexoes'
          >
            <Box>
              <Text
                variant='title'
              >
                {Intl.NumberFormat('pt-br',
                  {
                    maximumFractionDigits: 3,
                    notation: 'compact'
                  })
                  .format(messages.publicaEs)
                }
              </Text>
              <br/>
              <Text
                variant='paragraph1'
                color='tertiary.light'
              >
                Publicações
              </Text>
            </Box>

            <Box
              marginLeft='40px'
            >
              <Text
                variant='title'
              >
                {Intl.NumberFormat('pt-br',
                  {
                    maximumFractionDigits: 3,
                    notation: 'compact'
                  })
                  .format(messages.seguindo)
                }
              </Text>
              <br/>
              <Text
                color='tertiary.light'
              >
                Seguindo
              </Text>
            </Box>

            <Box
              marginLeft='40px'
            >
              <Text
                variant='title'
              >
                {Intl.NumberFormat('pt-br',
                  {
                    maximumFractionDigits: 3,
                    notation: 'compact'
                  })
                  .format(messages.seguidores)
                }
              </Text>
              <br/>
              <Text
                color='tertiary.light'
              >
                Seguidores
              </Text>
            </Box>

          </Grid.Row>

          <Grid.Row
            display='flex'
            justifyContent='center'
            style={{
              width: '100%',
              height: 'auto',
              margin: 0,
              marginTop: '18px'
            }}
          >
            <Text
              variant='title'
            >
              {messages.name}
            </Text>
            <br/>
            <Text
              color='tertiary.light'
            >
              A wholesome person responsiblefor the best movies ever.
            </Text>
          </Grid.Row>

        </Box>
      </Box>
    </Box>
  )
}
