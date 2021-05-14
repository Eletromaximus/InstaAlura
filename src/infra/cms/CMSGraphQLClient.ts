import { GraphQLClient, gql as GraphQLTag } from 'graphql-request'

export const gql = GraphQLTag

export function CMSGraphQLClient ({ preview } = { preview: false }) {
  const DatoCMSURL = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/'
  const TOKEN = process.env.DATO_CMS_TOKEN
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  return {
    async query ({ query, variables }: any) {
      const messages = await client.request(query, variables)
      console.log(messages)

      return {
        data: {
          messages
        }
      }
    }
  }
}
