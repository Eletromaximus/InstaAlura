import React from 'react'
import { authService } from '../../src/services/auth/authService'
import { userService } from '../../src/services/user/userService'

export default function ProfilePage (props: any) {
  return (
    <div>
      Página de Profile!
      <pre>
        {JSON.stringify(props, null, 4)}
      </pre>
      <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" />
    </div>
  )
}

export async function getServerSideProps (ctx: any) {
  const auth = authService(ctx)
  const hasActiveSession = await auth.hasActiveSession()

  if (hasActiveSession) {
    const session: any = await auth.getSession()
    const profilePage = await userService.getProfilePage(ctx)
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user
        },
        post: profilePage.posts
      }
    }
  }

  ctx.res.writeHead(307, { location: '/login' })
  return ctx.res.end()
}
