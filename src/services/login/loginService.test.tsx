import { loginService } from './loginService'

const token = 'fake-token'

async function HttpClientModule () {
  return {
    data: {
      token
    }
  }
}

async function HttpClientModuleError () {
  return {
    data: {},
    err: {
      message: 'Failed to login'
    }
  }
}
const setCookieModule = jest.fn()

describe('loginService', () => {
  describe('login()', () => {
    describe('when user try to login', () => {
      describe('and suceed', () => {
        test('store its token', async () => {
          const loginServiceResponse = await loginService.login({
            username: 'someuser',
            password: 'somepassword'
          }, setCookieModule, HttpClientModule)

          expect(setCookieModule).toHaveBeenCalledWith(
            null, 'LOGIN_COOKIE_APP_TOKEN', token, {
              path: '/',
              maxAge: 604800,
              sameSite: 'Lax'
            }
          )
          expect(loginServiceResponse).toEqual({ token })
        })
      })
      describe('and it fails', () => {
        test('throws and error', async () => {
          await expect(
            loginService.login({
              username: 'someuser',
              password: 'somepassword'
            }, setCookieModule, HttpClientModuleError)
          )
            .rejects
            .toThrow('Failed to Login')
        })
      })
    })
  })

  describe('logout()', () => {
    describe('when user try logout and succed', () => {
      test('remove its token', async () => {
        const destroyCookie = jest.fn()
        await loginService.logout(null, destroyCookie)

        expect(destroyCookie).toHaveBeenCalledWith(null, 'LOGIN_COOKIE_APP_TOKEN', { path: '/' })
      })
    })
  })
})
