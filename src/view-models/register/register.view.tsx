import { View, Text } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export default function RegisterView({ userData }: RegisterViewProps) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Welcome to Register, {userData.name}!</Text>
    </View>
  )
}
