import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Welcome to Login!</Text>

      <TouchableOpacity onPress={() => router.push('register')}>
        <Text className="mt-6 text-xl">Registar</Text>
      </TouchableOpacity>
    </View>
  )
}
