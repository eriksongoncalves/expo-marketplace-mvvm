import { Redirect } from 'expo-router'

export default function Index() {
  const isLogged = false

  if (isLogged) {
    return <Redirect href="/(private)/home" />
  }

  return <Redirect href="/login" />
}
