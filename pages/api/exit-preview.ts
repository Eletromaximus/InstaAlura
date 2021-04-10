import { NextApiRequest, NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData()

  res.writeHead(307, { location: '/' })

  return res.end()
}
