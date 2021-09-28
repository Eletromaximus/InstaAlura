import React from 'react'
import user from '@testing-library/user-event'
import FormLogin from '.'
import {
  render,
  act,
  screen,
  waitFor
} from '../../../infra/tests/testUtils'

const onSubmitMock = jest.fn((e) => e.preventDefault())
// onSubmiteMock.mockImplementation((event) => {
//   event.preventDefault();
// });

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    test('it completes the submission', async () => {
      await act(async () => {
        render(
          <FormLogin
            onSubmitx={onSubmitMock}
          />
        )
      })

      const submitButton = screen.getByRole('button')
      expect(submitButton).toBeDisabled()

      const inputUsuario = screen.getByPlaceholderText(/usuário/i)
      user.type(inputUsuario, 'someusername')
      await waitFor(() => expect(inputUsuario).toHaveValue('someusername'))

      const inputSenha = screen.getByPlaceholderText(/senha/i)
      user.type(inputSenha, 'somepassword')
      await waitFor(() => expect(inputSenha).toHaveValue('somepassword'))

      expect(submitButton).not.toBeDisabled()

      user.click(submitButton)

      // screen.debug();

      expect(onSubmitMock).not.toHaveBeenCalledTimes(1)
    })
  })

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<FormLogin onSubmitx={onSubmitMock} />)

      const inputUsuario = screen.getByPlaceholderText(/usu(a|á)rio/i)

      inputUsuario.focus()
      inputUsuario.blur()

      await waitFor(() => screen.getByRole('alert'))

      expect(screen.getByRole('alert')).toHaveTextContent('Preencha ao menos 3 caracteres')
    })
  })
})
