import { renderHook, act } from '@testing-library/react-hooks'
import useForm from './index'

describe('useForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Max Milliano'
        }
      }))
      const initialValues = { nome: 'Max Milliano' }
      expect(result.current.values).toEqual(initialValues)

      const event: any = {
        target: {
          getAttribute: () => 'nome',
          value: 'Max Milliano'
        }
      }
      act(() => {
        result.current.handleChange(event)
      })

      expect(result.current.values).toEqual({ nome: 'Max Milliano' })
    })
  })
})
