import { CMSGraphQLClient, gql } from '../../../../infra/cms/CMSGraphQLClient'

interface IProps {
  preview: boolean,
  user: string,
  id: string
}

export async function getContent ({ preview, user, id }: IProps) {
  const query = gql`
  query {
    allPosts(filter: {id: {eq: ${id}}, user: {eq: ${user}}}){
      photourl,
      likes,
      filter,
      createdAt,
      updatedAt
    }
  }
`
  const client = CMSGraphQLClient({ preview })

  const response = await client.query({ query })

  return response.data.messages
}

export async function getPages () {
  const query = gql`
  query {
    allPosts {
      id
    }
  }
`
  const client = CMSGraphQLClient()

  const response = await client.query({ query })

  return response.data.messages
}
