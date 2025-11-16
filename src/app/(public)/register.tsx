import RegisterView from '@/view-models/register/register.view'
import { useRegisterViewModel } from '@/view-models/register/useRegister.viewModel'

export default function Register() {
  const props = useRegisterViewModel()

  return <RegisterView {...props} />
}
