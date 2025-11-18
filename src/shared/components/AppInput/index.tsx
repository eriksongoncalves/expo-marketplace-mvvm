import { FC } from 'react'
import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { AppInputVariantsProps, appInputVariants } from './input.variants'
import { useAppInputViewModel } from './useAppInputViewModel'

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  containerClassName?: string
  mask?: (value: string) => void | string
  error?: string
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  mask,
  value,
  isError,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  error,
  isDisabled,
  ...textInputProps
}) => {
  const {
    getIconColor,
    handleWrapperPress,
    handlePasswordToggle,
    handleFocus,
    handleBlur,
    handleTextChange,
    isFocused,
    showPassword
  } = useAppInputViewModel({
    error,
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value
  })
  const styles = appInputVariants({
    isFocused,
    isError,
    isDisabled
  })

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()} onPress={handleWrapperPress}>
        {leftIcon && <Ionicons color={getIconColor()} className="mr-3" size={22} name={leftIcon} />}

        <TextInput
          className={styles.input()}
          {...textInputProps}
          onBlur={handleBlur}
          onFocus={handleFocus}
          secureTextEntry={showPassword}
          onChangeText={handleTextChange}
        />

        {rightIcon && (
          <Ionicons color={getIconColor()} className="ml-3" size={22} name={rightIcon} />
        )}

        {secureTextEntry && (
          <TouchableOpacity onPress={handlePasswordToggle}>
            <Ionicons size={22} name={showPassword ? 'eye-outline' : 'eye-off-outline'} />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  )
}
