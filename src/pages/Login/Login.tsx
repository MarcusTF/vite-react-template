import { useMainContext } from "context"

import { LoginComponent } from "./Login.types"

import "./Login.scss"

const Login: LoginComponent = () => {
  const { actions } = useMainContext()
  const handleLogin = () => {
    actions.login({ isLoggedIn: true })
  }
  return (
    <div className='login'>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
