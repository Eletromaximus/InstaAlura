import React from 'react'
import { render, screen } from '../../infra/tests/testUtils'
import TextField from './TextField'
import user from '@testing-library/user-event'

describe('<TextField />', () => {
  test('renders component', () => {
    render(
        <TextField
          placeholder='Nome'
          value='Mario'
          onChange={() => {}}
          name='name'
        />
    )

    const textField = screen.getAllByPlaceholderText(/nome/i)

    expect(textField).toMatchSnapshot()
  })

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn()
        render(
          <TextField
            placeholder='Nome'
            value=''
            onChange={onChangeMock}
            name='nome'
            isTouched
            error=''
          />
        )

        const inputNome = screen.getByPlaceholderText(/nome/i)
        user.type(inputNome, 'devsoutinho@gmail.com')

        console.log(onChangeMock.mock)

        expect(onChangeMock).toHaveBeenCalledTimes(21)
      })
    })
  })

  describe('when field is invalid', () => {
    // elemente tenha o span de texto
    // muda o css
    test('display the respect error message', () => {
      render(
        <TextField
          placeholder='Email'
          value='devsoutinhogmail.com'
          onChange={() => {}}
          name='email'
          isTouched
          error='O campo email é obrigatório'
        />
      )
      const inputEmail = screen.getByPlaceholderText(/email/i)
      expect(inputEmail).toHaveValue('devsoutinhogmail.com')
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório')
      expect(inputEmail).toMatchSnapshot()
    })
  })
})
