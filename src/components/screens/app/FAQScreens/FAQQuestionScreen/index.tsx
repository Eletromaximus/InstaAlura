import React from 'react'
import { Grid } from '../../../../foundation/layout/Grid'
import { Box } from '../../../../foundation/layout/Box'
import Text from '../../../../foundation/Text'
import { useTheme } from 'styled-components'

export interface IFaqQuestion {
  category: {
    title: string,
    questions: [
      title: string,
      slug: string
    ]
  },
  question: {
    title: string,
    description: string
  }
}

export default function FAQQuestionScreen ({ category, question }: IFaqQuestion) {
  const theme = useTheme()
  return (
    <Grid.Container
      flex='1'
      marginTop={{
        xs: '32px',
        md: '80px'
      }}
    >
      <Grid.Row
        flexDirection={{
          xs: 'column-reverse',
          md: 'row'
        }}
      >
        <Grid.Col
          offset={{ sm: 0, lg: 1 }}
          value={{ xs: 12, md: 4, lg: 4 }}
        >
          <Text
            variant='title'
            color='tertiary.main'
            marginBottom='25px'
          >
            Artigos
            <br />
            Relacionados
          </Text>
          <Box
            as='ul'
            listStyle='none'
            // @ts-ignore
            backgroundColor={theme.colors.borders.main.color}
            padding='24px'
            borderRadiusTheme
          >
            {category.questions.map((currentQuestion: any) => (
              <li key={currentQuestion.slug} style={{
                padding: '16px 30px'
              }}>
                <Text
                  variant='paragraph2'
                  href={`/faq/${currentQuestion.slug}`}
                  color='primary.main'
                >
                  {currentQuestion.title}
                </Text>
              </li>
            ))
            }
          </Box>
        </Grid.Col>

        <Grid.Col
          value={{ lg: 6 }}
          marginBottom={{
            xs: '50px',
            md: '0'
          }}
        >
          <Text
            variant='title'
            color='tertiary.main'
          >
            {question.title}
          </Text>
          <Text
            tag='p'
            variant='paragraph1'
            color='tertiary.light'
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: question.description }}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}
