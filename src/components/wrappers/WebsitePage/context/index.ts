import { createContext } from 'react'

export const WebsitePagesContext = createContext({
  toggleModalCadastro: () => {},
  getCMSContent: (cmsKey: string) => cmsKey
})
