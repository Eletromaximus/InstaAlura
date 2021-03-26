import React, { FormEvent, useState } from 'react'

export default function useForm ({ initialValues, onSubmit } : any) {
  const [values, setValues] = useState(initialValues)

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
    }
  }
}
