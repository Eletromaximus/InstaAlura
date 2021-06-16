import { NextApiRequest, NextApiResponse } from 'next'
const SiteClient = require('datocms-client').SiteClient

export default async function UpdateLike (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.headers.authorization) {
    const client = new SiteClient(process.env.DATO_CMS_FULLACESS_TOKEN)
    const { likes, id } = await req.body

    await client.items.update(id, {
      likes: likes
    })
      .then(async (resposta: any) => {
        res.status(200).send(resposta)
      })
      .catch((error: Error) => {
        console.error(error.message)
      })
  } else {
    res.status(400).json(({
      message: 'Método não permitido'
    }))
  }
}
