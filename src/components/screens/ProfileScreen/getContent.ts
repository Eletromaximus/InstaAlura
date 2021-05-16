import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient'

export async function getContent ({ preview } = { preview: false }) {
  const query = gql`
  query {
    profile{
      name,
      bio,
      seguindo,
      seguidores,
      publicaEs,
      avatarImage {
        url
      }
    },
    allPosts {
      description,
      photourl,
      filter,
      id,
      user,
      createdAt,
      updatedAt
    }
  }
`
  const client = CMSGraphQLClient({ preview })

  const response: any = await client.query({ query })
  return response.data.messages
}
