import { parseCookies } from 'nookies'
import { loginService, LOGIN_COOKIE_APP_TOKEN } from '../login/loginService'
import jwt from 'jsonwebtoken'
import HttpClient from '../../infra/http/HttpClient'
import { isStagingEnv } from '../../infra/env/isStagingEnv'

const BASE_URL = isStagingEnv
  // Back-end de DEV
  ? 'http://localhost:4000'
  // Back-end de PROD
  : 'https://app-instalura.herokuapp.com'

export const authService = (ctx: any) => {
  const cookies = parseCookies(ctx)
  const token = cookies[LOGIN_COOKIE_APP_TOKEN]
  return {
    async getToken () {
      return token
    },
    async hasActiveSession () {
      return await HttpClient(`${BASE_URL}/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(( authenticated ) => {
          if (!authenticated) {
            loginService.logout(ctx)
          }

          return authenticated
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
