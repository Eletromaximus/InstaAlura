import React from 'react'
import { render, screen } from '../../infra/tests/testUtils'
import TextField from './TextField'

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

    screen.debug()

    const textField = screen.getAllByPlaceholderText(/nome/i)

    console.log(textField)

    expect(textField).toMatchSnapshot()
  })
})
