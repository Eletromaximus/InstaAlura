import propToStyle from './index'

describe('propToStyle()', () => {
  describe('when receives an sample argument', () => {
    test('an it is a string', () => {
      const propToStyleResult = propToStyle('textAlign')
      const componentProps = { textAlign: 'center' }
      const styleResult = propToStyleResult(componentProps)
      expect(styleResult).toEqual({ textAlign: 'center' })
    })
    test('an it is a number', () => {
      const propToStyleResult = propToStyle('flex')
      const componentProps = { flex: 1 }
      const styleResult = propToStyleResult(componentProps)
      expect(styleResult).toEqual({ flex: 1 })
    })
  })

  describe('when receives an argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign')
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center' } } // string
      const styleResult = propToStyleResult(componentProps)

      expect(styleResult).toMatchSnapshot()
    })
    test('renders two or more breakpoint resolutions', () => {
      const propToStyleResult = propToStyle('textAlign')
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } }// string
      const styleResult = propToStyleResult(componentProps)

      expect(styleResult).toMatchSnapshot()
    })
  })
})
