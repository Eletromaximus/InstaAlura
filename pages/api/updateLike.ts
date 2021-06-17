import { NextApiRequest, NextApiResponse } from 'next'
const SiteClient = require('datocms-client').SiteClient

export default async function UpdateLike (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.headers.authorization) {
    const client = new SiteClient(process.env.DATO_CMS_FULLACESS_TOKEN)
    const { like, id } = await req.body

    await client.items.update(id, {
      likes: like
    })
      .then(async (result: any) => {
        res.json(result.status)
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
