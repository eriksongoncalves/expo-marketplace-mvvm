import { Redirect } from 'expo-router'

export default function Index() {
  const isLogged = true

  if (isLogged) {
    return <Redirect href="/(private)/home" />
  }

  return <Redirect href="/login" />
}
