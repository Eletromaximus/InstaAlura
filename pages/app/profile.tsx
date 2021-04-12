import React from 'react'
import { authService } from '../../src/services/auth/authService'

export default function ProfilePage (props: any) {
  return (
    <div>
      Página de Profile!
      {JSON.stringify(props, null, 4)}
      <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" />
    </div>
  )
}

export async function getServerSideProps (ctx: any) {
  console.log('[ServerSide]')
  const auth = authService(ctx)
  const hasActiveSession = await auth.hasActiveSession()

  if (hasActiveSession) {
    const session: any = await auth.getSession()
    return {
      props: {
        user: {
          name: session.user
        }
      }
    }
  }

  ctx.res.writeHead(307, { location: '/login' })
  return ctx.res.end()
}
