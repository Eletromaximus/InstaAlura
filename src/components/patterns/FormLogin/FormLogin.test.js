import React from 'react'
import user from '@testing-library/user-event'
import FormLogin from './index'
import {
  render,
  act,
  screen,
  waitFor
} from '../../../infra/tests/testUtils'

// const onSubmit = () => {
//   jest.fn().mockImplementation(
//     (event) => {
//       event.preventDefault()
//     })
// }

// describe('<FormLogin />', () => {
//   describe('when from fields are valid', () => {
//     test('complete the sumission', async () => {
//       await act(async () => {
//         render(
//         <FormLogin
//           onSubmit={onSubmit}
//         />
//         )
//       })

//       expect(screen.getByRole('button')).toBeDisabled()

//       const inputUsuario = screen.getByPlaceholderText('Usuário')
//       user.type(inputUsuario, 'someusername')
//       await waitFor(() => expect(inputUsuario).toHaveValue('someusername'))

//       const inputSenha = screen.getByPlaceholderText('Senha')
//       user.type(inputSenha, 'somepassword')
//       await waitFor(() => expect(inputSenha).toHaveValue('somepassword'))

//       expect(screen.getByRole('button')).not.toBeDisabled()
//       user.click(screen.getByRole('button'))

//       expect(onSubmit).toHaveBeenCalledTimes(1)
//     })
//   })
// })
