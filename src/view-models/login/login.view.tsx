import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

import { AppInputController } from '@/shared/components/AppInputController'
import { AuthFormHeader } from '@/shared/components/AuthFormHeader'
import { KeyboardContainer } from '@/shared/components/KeyboardContainer'
import { useLoginViewModel } from './useLogin.viewModel'

type LoginViewProps = ReturnType<typeof useLoginViewModel>

export default function LoginView({ control }: LoginViewProps) {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader subTitle="Informe seu e-mail e senha" title="Acesse sua conta" />

        <AppInputController control={control} name="email" leftIcon="mail-outline" label="E-mail" />

        <AppInputController
          control={control}
          name="password"
          label="Senha"
          leftIcon="lock-closed-outline"
          secureTextEntry
        />

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  )
}
