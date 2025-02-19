import { ReactNode } from "react"

export interface LoginProps {
  example?: string
}

export type LoginComponent = (props: LoginProps) => ReactNode
