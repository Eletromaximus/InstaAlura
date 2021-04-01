/* eslint-disable camelcase */
import { destroyCookie, setCookie } from 'nookies'
import { isStagingEnv } from '../../infra/env/isStagingEnv'

async function HttpClient (url: string, { headers, body, ...options }: any) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    ...options
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json()
      }
      throw new Error('Falha em pegar os dados do servidor :(')
    })
}

const Base_URL = isStagingEnv ? 'https://instalura-api-git-master-omariosouto.vercel.app/api/login' : 'https://instalura-api-omariosouto.vercel.app/api/login'
interface ILogin {
  username: string;
  password: string
}

export const loginService = {
  async login ({ username, password }: ILogin,
    setCookieModule = setCookie,
    HttpClientModule = HttpClient) {
    return HttpClientModule(Base_URL, {
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

        setCookieModule(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7
        })

        return { token }
      })
  },
  async logout (destroyCookieModule = destroyCookie) {
    destroyCookieModule(null, 'APP_TOKEN')
  }
}
