import { NextApiRequest, NextApiResponse } from 'next'
import HttpClient from '../../src/infra/http/HttpClient'

export default async function Login (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password, BASE_URL } = await req.body
    const Result = await HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password })
    })

    res.send(await Result)
  } else {
    return res.status(400).json({ error: 'método não permitido' })
  }
}
