import { View } from 'react-native'

import { AppInputController } from '@/shared/components/AppInputController'
import { useRegisterViewModel } from './useRegister.viewModel'

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export default function RegisterView({ control }: RegisterViewProps) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <AppInputController control={control} name="email" leftIcon="mail-outline" label="E-mail" />

      <AppInputController
        control={control}
        name="password"
        label="Senha"
        leftIcon="lock-closed-outline"
        secureTextEntry
      />
    </View>
  )
}
