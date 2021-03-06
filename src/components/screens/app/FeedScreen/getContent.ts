import { CMSGraphQLClient, gql } from '@infra/cms/CMSGraphQLClient'

interface IProps {
  preview: boolean
}

export async function getContent ({ preview }: IProps) {
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
      likes,
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

  const response = await client.query({ query })

  return response.data.messages
}
