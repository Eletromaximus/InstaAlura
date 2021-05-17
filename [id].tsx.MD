import { getContent } from '../../src/components/screens/FeedScreen/getContent'
import { authService } from '../../src/services/auth/authService'

export async function getStaticProps (ctx: any) {
  const preview = ctx.preview
  const messages = await getContent({ preview })
  const auth = authService(ctx)
  const hasActiveSession = await auth.hasActiveSession()

  if (hasActiveSession) {
    const session: any = await auth.getSession()
    return {
      props: {

      }
    }
  }

  ctx.res.writeHead(307, { location: '/login' })
  ctx.res.end()
  return {
    props: {}
  }
}

export async function getStaticPaths () {

}
