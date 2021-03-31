import React, { FormEvent, useEffect, useState } from 'react'

export default function useForm ({
  initialValues,
  onSubmit,
  validateSchema
} : any) {
  const [values, setValues] = useState(initialValues)

  const [isFormDisabled, setIsFormDisabled] = React.useState(true)
  const [errors, setErros] = useState<any>()
  const [touched, setTouchedFields] = useState<any>()

  useEffect(() => {
    validateSchema(values)
      .then((result: any) => {
        setIsFormDisabled(false)
        setErros({})
      })
      .catch((err: any) => {
        const formatedErrors = err.inner.reduce((errorObjectAcc: {}, currentError: any) => {
          const fieldName = currentError.path
          const errorMessage = currentError.message
          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage
          }
        }, {})
        setErros(formatedErrors)
        setIsFormDisabled(true)
      })
  }, [values])

  return {
    values,
    handleSubmit (event: FormEvent) {
      event.preventDefault()
      onSubmit(values)
    },

    handleChange (event: React.ChangeEvent<HTMLInputElement>) {
      const fieldName: any = event.target.getAttribute('name')
      const { value } = event.target

      setValues((currentValues: any) => ({
        ...currentValues,
        [fieldName]: value
      }))
    },

    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
    handleBlur (event: React.ChangeEvent<HTMLInputElement>) {
      const fieldName: any = event.target.getAttribute('name')

      setTouchedFields({
        ...touched,
        [fieldName]: true
      })
    }
  }
}
