import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { RegisterFormData, registerScheme } from './register.scheme'
import { useRegisterMutation } from '@/shared/queries/auth/use-register.mutation'

export const useRegisterViewModel = () => {
  const userRgisterMutation = useRegisterMutation()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    }
  })

  const onSubmit = handleSubmit(async userData => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...registerData } = userData

    await userRgisterMutation.mutateAsync(registerData)
  })

  return {
    control,
    errors,
    onSubmit
  }
}
