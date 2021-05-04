import { NextApiRequest, NextApiResponse } from 'next'
import HttpClient from '../../src/infra/http/HttpClient'

async function HttpServer (url: string, body: object) {
  return await fetch(`${url}/api/login`, {
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then(async (resposta: any) => {
      return await resposta
    })
    .catch(async (err: string) => {
      throw Error(err)
    })
}

export default async function Login (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password, BASE_URL } = req.body
    const Result = await HttpClient(
      `${BASE_URL}/api/login`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        })
      })
      .then(async (resposta: any) => {
        return resposta
      })
      .catch(async (err: string) => {
        throw Error(err)
      })
    res.send(await Result)
  } else {
    return res.status(400).json({ error: 'método não permitido' })
  }
}
// import jwt from 'jsonwebtoken'

// const timeDate = new Date()
// const time = timeDate.getSeconds()

// const token = {
//   user: {
//     id: "5fe9035f5bb019a3c62572da",
//     username: "omariosouto",
//     role: [
//       "user"
//     ]
//   },
//   iat: time,
//   exp: time + 604800
// }

// const privateKey = 'senhasegura'

// if (username === 'omariosouto' && password === 'senhasegura') {
//   const data = jwt.sign(
//     token,
//     privateKey,
//     {
//       algorithm: 'HS256'
//     })

//   return res.status(200).json({
//     data: {
//       token: data,
//       user: {
//         id: "5fe9035f5bb019a3c62572da",
//         username: "omariosouto",
//         name: "Mario Souto"
//       }
//     }
//   })
// }
