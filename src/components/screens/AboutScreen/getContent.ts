import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient'

interface IProps {
  preview: boolean
}

export async function getContent ({ preview }: IProps) {
  const query = gql`
  query {
    pageSobre {
      pageTitle
      pageDescription
    }
  }
`
  const client = CMSGraphQLClient({ preview })

  const response = await client.query({ query })

  return response.data.messages
}
