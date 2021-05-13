/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next'
const { SiteClient } = require('datocms-client')

export default async function Post (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.headers.authorization) {
    const client = new SiteClient(process.env.DATO_CMS_FULLACESS_TOKEN)
    const body = await req.body

    const record = await client.items.create({
      itemType: '786654',
      // __id: '60649c6682bf5808e2b0d472',
      photourl: body.photoUrl,
      description: body.description,
      filter: body.filter,
      user: '5fe9035f5bb019a3c62572da',
      likes: []
      // __v: 0
    })
    const { id, photoUrl, description, filter, user, likes, created_at, updated_at } = record
    const data = { id, photoUrl, description, filter, user, likes, created_at, updated_at }
    return res.json(data)
  } else {
    return res.status(400).json(({
      message: 'Método não permitido'
    }))
  }
}
