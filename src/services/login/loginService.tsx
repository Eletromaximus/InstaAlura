/* eslint-disable camelcase */
import { destroyCookie, setCookie } from 'nookies'
import { isStagingEnv } from '../../infra/env/isStagingEnv'
import HttpClient from '../../infra/http/HttpClient'

const BASE_URL = isStagingEnv
  // Back End de DEV
  ? 'https://instalura-api-git-master.omariosouto.vercel.app'
  // Back End de PROD
  : 'https://instalura-api.omariosouto.vercel.app'

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN'
interface ILogin {
  username: string;
  password: string
}

export const loginService = {
  async login ({ username, password }: ILogin,
    setCookieModule = setCookie,
    HttpClientModule = HttpClient) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: { username, password }
    })
      .then((respostaConvertida) => {
        const { token } = respostaConvertida.data
        const hasToken = token
        if (!hasToken) {
          throw new Error('Failed to Login')
        }
        const DAY_IN_SECONDS = 86400

        setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7
        })

        return { token }
      })
  },
  async logout (destroyCookieModule = destroyCookie) {
    destroyCookieModule(null, LOGIN_COOKIE_APP_TOKEN)
  }
}
