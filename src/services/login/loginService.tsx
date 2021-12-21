/* eslint-disable camelcase */
import { destroyCookie, setCookie } from 'nookies'
import { isStagingEnv } from '../../infra/env/isStagingEnv'
import HttpClient from '../../infra/http/HttpClient'

interface ILogin {
  name: string;
  password: string;
}

const BASE_URL = isStagingEnv
// Back-end de DEV
  ? 'http://localhost:4000'
// Back-end de PROD
  : 'https://app-instalura.herokuapp.com'

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN'

export const loginService = {
  async login ({ name, password }: ILogin,
    setCookieModule = setCookie,
    HttpClientModule = HttpClient
  ) {
    return HttpClientModule(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password
      })
    })
      .then( async (respostaConvertida: any) => {
        const { token } = await respostaConvertida.json()
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
