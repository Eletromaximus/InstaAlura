import { authService } from '@services/auth/authService'
import websitePageHOC from '@components/wrappers/WebsitePage/hoc'
import ProfileScreen, { getContent } from '@components/screens/app/ProfileScreen'

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

export default websitePageHOC(ProfileScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile'
    },
    menuProps: {
      display: false,
      profileDisplay: true
    },
    formCadastro: false
  }
})
