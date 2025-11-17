import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { RegisterFormData, registerScheme } from './register.scheme'
import { useRegisterMutation } from '@/shared/queries/auth/use-register.mutation'
import { useUserStore } from '@/shared/store/user-store'

export const useRegisterViewModel = () => {
  const userRgisterMutation = useRegisterMutation()
  const { setSession } = useUserStore()

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

    const response = await userRgisterMutation.mutateAsync(registerData)

    setSession({
      refreshToken: response.refreshToken,
      token: response.token,
      user: response.user
    })
  })

  return {
    control,
    errors,
    onSubmit
  }
}
