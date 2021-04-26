import { Grid } from '../../../foundation/layout/Grid'
import { Box } from '../../../foundation/layout/Box'
import Image from 'next/image'
import Text from '../../../foundation/Text'
import { BioBox } from './style'

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

export default function Bio ({ messages }: IProfile) {
  return (
    <BioBox
        id='bio'
      >
        <BioBox.Avatar>
          {messages.avatarImage.url && <Image
            width='188px'
            height='188px'
            src={messages.avatarImage.url}
            alt='avatar'
          />}
        </BioBox.Avatar>

        <BioBox.Infos
          id='infos'
        >
          <Grid.Row
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
            id='name'
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

        </BioBox.Infos>
      </BioBox>
  )
}
