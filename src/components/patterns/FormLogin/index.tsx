import React from 'react'
import Button from '../../commons/Button'
import TextField from '../../Forms/TextField'
import { useRouter } from 'next/router'
import useForm from '../../../infra/hooks/forms/useForm'
import { loginService } from '../../../services/login/loginService'
import * as yup from 'yup'

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('Usuário é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .min(8, 'Sua senha precisa ao menos de 8 caracteres')
    .required()
})

export default function LoginForm () {
  const router = useRouter()
  const initialValues = {
    usuario: '',
    senha: ''
  }

  const form = useForm({
    initialValues,
    onSubmit: (values: any) => {
      form.setIsFormDisabled(true)
      loginService.login({
        username: values.usuario,
        password: values.senha
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
        name='usuario'
        value={form.values.usuario}
        error={form.errors ? form.errors.usuario : ''}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        isTouched={form.touched ? form.touched.usuario : null}
      />
      <TextField
        placeholder='Senha'
        name='senha'
        type='password'
        value={form.values.senha}
        error={form.errors ? form.errors.senha : ''}
        onChange={form.handleChange}
        isTouched={form.touched ? form.touched.senha : null}
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
