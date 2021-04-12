import { isStagingEnv } from '../../infra/env/isStagingEnv'
import HttpClient from '../../infra/http/HttpClient'
import { authService } from '../auth/authService'

const BASE_URL = isStagingEnv
  // Back End de DEV
  ? 'https://instalura-api-git-master.omariosouto.vercel.app'
  // Back End de PROD
  : 'https://instalura-api.omariosouto.vercel.app'

export const userService = {
  async getProfilePage (ctx: any) {
    const url = `${BASE_URL}/api/users/posts`
    try {
      const token = await authService(ctx).getToken()
      const response = await HttpClient(url, {
        Headers: {
          authorization: `Bearer ${token}`
        }
      })

      return {
        user: {
          totalLikes: 100
        },
        posts: response.data
      }
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts')
    }
  }
}
