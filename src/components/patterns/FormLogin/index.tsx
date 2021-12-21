import React from 'react'
import Button from '../../commons/Button'
import TextField from '../../Forms/TextField'
import { useRouter } from 'next/router'
import useForm from '../../../infra/hooks/forms/useForm'
import { loginService } from '../../../services/login/loginService'
import * as yup from 'yup'

const loginSchema = yup.object().shape({
  name: yup
    .string()
    .required('Usuário é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  password: yup
    .string()
    .min(8, 'Sua password precisa ao menos de 8 caracteres')
    .required()
})

export default function LoginForm () {
  const router = useRouter()
  const initialValues = {
    name: '',
    password: ''
  }

  const form = useForm({
    initialValues,
    onSubmit: (values: any) => {
      form.setIsFormDisabled(true)
      loginService.login({
        name: values.name,
        password: values.password
      })
        .then(() => {
          router.push('/app/profile')
        })
        .catch((err: Error) => {
          console.log(err)
        })
        .finally(() => {
          form.setIsFormDisabled(false)
        })
    },
    async validateSchema (values: any) {
      return loginSchema.validate(values, {
        abortEarly: false
      })
    }
  })

  return (
    <form id='formCadastro' onSubmit={ form.handleSubmit }>
      <TextField
        placeholder='Usuário'
        name='name'
        value={form.values.name}
        error={form.errors ? form.errors.name : ''}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        isTouched={form.touched ? form.touched.name : null}
      />
      <TextField
        placeholder='password'
        name='password'
        type='password'
        value={form.values.password}
        error={form.errors ? form.errors.password : ''}
        onChange={form.handleChange}
        isTouched={form.touched ? form.touched.password : null}
        onBlur={form.handleBlur}
      />

      <Button
        type='submit'
        variant='primary.main'
        margin={{
          xs: '0 auto',
          md: 'initial'
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>

    </form>
  )
}
