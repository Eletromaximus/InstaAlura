import { parseCookies } from 'nookies'
import { LOGIN_COOKIE_APP_TOKEN } from '../login/loginService'
import jwt from 'jsonwebtoken'
import HttpClient from '../../infra/http/HttpClient'
import { isStagingEnv } from '../../infra/env/isStagingEnv'

const BASE_URL = isStagingEnv
  // Back End de DEV
  ? 'https://instalura-api-git-master.omariosouto.vercel.app'
  // Back End de PROD
  : 'https://instalura-api.omariosouto.vercel.app'

export const authService = (ctx: any) => {
  const cookies = parseCookies(ctx)
  const token = cookies[LOGIN_COOKIE_APP_TOKEN]

  return {
    async hasActiveSession () {
      return HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(({ data }) => {
          if (data.authenticated) {
            return true
          }

          return false
        })
        .catch(() => false)
    },
    async getSession () {
      const session = jwt.decode(token)
      return session
    }
  }
}
