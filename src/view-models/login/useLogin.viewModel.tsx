import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { loginScheme } from './login.scheme'

// import { useUserStore } from '@/shared/store/user-store'

export const useLoginViewModel = () => {
  // const { setSession } = useUserStore()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = handleSubmit(async userData => {
    console.log('Login data:', userData)
  })

  return {
    control,
    errors,
    onSubmit
  }
}
