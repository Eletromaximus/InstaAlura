/* eslint-disable camelcase */
import { destroyCookie, setCookie } from 'nookies'
import { isStagingEnv } from '../../infra/env/isStagingEnv'
import HttpClient from '../../infra/http/HttpClient'

interface ILogin {
  username: string;
  password: string;
}

const BASE_URL = isStagingEnv
// Back-end de DEV
  ? 'https://instalura-api-omariosouto.vercel.app'
// Back-end de PROD
  : 'https://instalura-api-git-master-omariosouto.vercel.app'

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN'

export const loginService = {
  async login ({ username, password }: ILogin,
    setCookieModule = setCookie,
    HttpClientModule = HttpClient) {
    return HttpClientModule('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        BASE_URL
      })
    })
      .then((respostaConvertida: any) => {
        const { token } = respostaConvertida.data

        if (!token) {
          throw new Error('Failed to Login')
        }
        const DAY_IN_SECONDS = 86400

        setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
          sameSite: 'Lax'
        })

        return { token }
      })
  },
  async logout (ctx: any, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/' })
  }
}
