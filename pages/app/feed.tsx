import websitePageHOC from '@components/wrappers/WebsitePage/hoc'
import Feed, { getContent } from '@components/screens/app/FeedScreen'
import { authService } from '@services/auth/authService'

export default websitePageHOC(Feed, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Feed'
    },
    menuProps: {
      display: false,
      profileDisplay: true
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right'
    }
  }
})

export async function getServerSideProps (ctx: any) {
  const preview = ctx.preview
  const messages = await getContent({ preview })
  const auth = authService(ctx)
  const hasActiveSession = await auth.hasActiveSession()
  const token = await auth.getToken()

  if (hasActiveSession) {
    const session: any = await auth.getSession()
    return {
      props: {
        messages,
        token,
        user: {
          ...session
        }
      }
    }
  }

  ctx.res.writeHead(307, { location: '/login' })
  ctx.res.end()
  return {
    props: {}
  }
}
