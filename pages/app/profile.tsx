import React from 'react'
import { authService } from '../../src/services/auth/authService'
import { userUserService } from '../../src/services/user/hook'

export default function ProfilePage (props: any) {
  const dados = userUserService.getProfilePage()

  return (
    <div>
      Página de Profile!

      {dados.loading && 'Loading'}
      {dados.loading && dados.data && 'Carregou com sucesso'}
      {dados.loading && dados.error && 'Não conseguimos pegar os tokens'}

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
    // const profilePage = await userService.getProfilePage(ctx)
    return {
      props: {
        user: {
          ...session
          // ...profilePage.user
        }
        // post: profilePage.posts
      }
    }
  }

  ctx.res.writeHead(307, { location: '/login' })
  ctx.res.end()
  return {
    props: {}
  }
}
