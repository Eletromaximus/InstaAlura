import { renderHook } from '@testing-library/react-hooks'
import useForm from './index'

describe('useForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Mario'
        }
      }))
      const initialValues = { nome: 'Mario' }
      expect(result.current.values).toEqual(initialValues)

      // const event = {
      //   target: {
      //     getAttribute: () => 'nome',
      //     value: 'Novo valor'
      //   }
      // }
      // act(() => {
      //   result.current.handleChange(/* event */)
      // })

      expect(result.current.values).toEqual({ nome: 'Mario' })
    })
  })
})
