import { View, TouchableOpacity, Text } from 'react-native'
import { router } from 'expo-router'

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <TouchableOpacity onPress={() => router.push('login')}>
        <Text className="font-bold">Go To Login</Text>
      </TouchableOpacity>
    </View>
  )
}
