import { FC } from 'react'
import { Image, Text, View } from 'react-native'

import Logo from '@/assets/images/Logo.png'

interface AuthFormHeaderProps {
  title: string
  subTitle: string
}

export const AuthFormHeader: FC<AuthFormHeaderProps> = ({ title, subTitle }) => {
  return (
    <View className="mb-8 items-center">
      <Image source={Logo} resizeMode="contain" className="mb-8 h-[60px] w-[80px]" />

      <Text className="mb-3 text-3xl font-bold text-gray-500">{title}</Text>
      <Text className="text-base text-gray-300">{subTitle}</Text>
    </View>
  )
}
