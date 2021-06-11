import AboutScreen, { getContent } from '@components/screens/AboutScreen'
import websitePageHOC from '@components/wrappers/WebsitePage/hoc'

interface IProps {
  preview: boolean
}

export async function getStaticProps ({ preview }: IProps) {
  const messages = await getContent({ preview })

  return {
    props: {
      messages
    }
  }
}

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About'
    }
  }
})
