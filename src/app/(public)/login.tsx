import LoginView from '@/view-models/login/login.view'
import { useLoginViewModel } from '@/view-models/login/useLogin.viewModel'

export default function Login() {
  const props = useLoginViewModel()

  return <LoginView {...props} />
}
