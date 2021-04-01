import React, { FormEvent, useEffect, useState } from 'react'

function formatErrors (yupErrorsInner = []) {
  return yupErrorsInner.reduce((errorObjectAcc: {}, currentError: any) => {
    const fieldName = currentError.path
    const errorMessage = currentError.message
    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage
    }
  }, {})
}
export default function useForm ({
  initialValues,
  onSubmit,
  validateSchema
} : any) {
  const [values, setValues] = useState(initialValues)

  const [isFormDisabled, setIsFormDisabled] = React.useState(true)
  const [errors, setErros] = useState<any>()
  const [touched, setTouchedFields] = useState<any>()

  async function validateValues (currentValues: any) {
    try {
      await validateSchema(currentValues)
      setIsFormDisabled(false)
      setErros({})
    } catch (err: any) {
      const formatedErrors = formatErrors(err.inner)
      setErros(formatedErrors)
      setIsFormDisabled(true)
    }
  }
  useEffect(() => {
    validateValues(values)
      .catch((error: Error) => {
        console.log(error)
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
