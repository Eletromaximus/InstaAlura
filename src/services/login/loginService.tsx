import { destroyCookie, setCookie } from 'nookies'

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

interface ILogin {
  username: string;
  password: string
}

export const loginService = {
  async login ({ username, password }: ILogin) {
    return HttpClient('https://instalura-api-git-master-omariosouto.vercel.app/api/login', {
      method: 'POST',
      body: { username, password }
    })
      .then((respostaConvertida) => {
        const { token } = respostaConvertida.data
        const DAY_IN_SECONDS = 86400

        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7
        })

        return { token }
      })
  },
  logout () {
    destroyCookie(null, 'APP_TOKEN')
  }
}
