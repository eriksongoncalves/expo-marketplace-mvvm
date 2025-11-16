import { useState } from 'react'

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: 'Erikson'
  })

  return { userData, setUserData }
}
