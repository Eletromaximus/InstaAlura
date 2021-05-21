import { parseCookies } from 'nookies'
import { loginService, LOGIN_COOKIE_APP_TOKEN } from '../login/loginService'
import jwt from 'jsonwebtoken'
import HttpClient from '../../infra/http/HttpClient'
import { isStagingEnv } from '../../infra/env/isStagingEnv'

const BASE_URL = isStagingEnv
  // Back-end de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Back-end de PROD
  : 'https://instalura-api-omariosouto.vercel.app'

export const authService = (ctx: any) => {
  const cookies = parseCookies(ctx)
  const token = cookies[LOGIN_COOKIE_APP_TOKEN]

  return {
    async getToken () {
      return token
    },
    async hasActiveSession () {
      return await HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(({ data }) => {
          if (!data.authenticated) {
            loginService.logout(ctx)
          }

          return data.authenticated
        })
        .catch(() => {
          loginService.logout(ctx)
          return false
        })
    },
    async getSession () {
      const session = jwt.decode(token)
      return session
    }
  }
}
