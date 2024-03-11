import { UseRestMutation } from "rest"

interface LoginVariables {
  email: string
  password: string
}

export interface LoginResponse {
  message: string
  user: LoginUser
}

interface LoginUser {
  id: number
  first_name: string
  last_name: string
}

export type UseLogin = UseRestMutation<LoginVariables, LoginResponse>

export type LogoutVariables = {
  userId: number
}

export interface LogoutResponse {
  message: string
}

export type UseLogout = UseRestMutation<LogoutVariables, LogoutResponse>
