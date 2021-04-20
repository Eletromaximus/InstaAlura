import { authService } from '../../src/services/auth/authService'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'
import ProfileScreen, { getContent } from '../../src/components/screens/ProfileScreen'

// interface IProps {
//   preview: boolean
// }

export async function getServerSideProps (ctx: any) {
  const preview = ctx.preview
  const messages = await getContent({ preview })
  const auth = authService(ctx)
  const hasActiveSession = await auth.hasActiveSession()

  if (hasActiveSession) {
    const session: any = await auth.getSession()
    return {
      props: {
        messages,
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

export default websitePageHOC(ProfileScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile'
    }
  }
})
