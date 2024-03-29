import { isStagingEnv } from '../../infra/env/isStagingEnv'
import HttpClient from '../../infra/http/HttpClient'
import { authService } from '../auth/authService'

const BASE_URL = isStagingEnv
  // Back-end de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Back-end de PROD
  : 'https://instalura-api-omariosouto.vercel.app'

export const userService = {
  async getProfilePage (ctx?: any) {
    try {
      const url = `${BASE_URL}/api/users/posts`
      const token = await authService(ctx).getToken()

      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })

      return {
        user: {
          totalLikes: 100
        },
        posts: response.json()
      }
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts')
    }
  }
}
