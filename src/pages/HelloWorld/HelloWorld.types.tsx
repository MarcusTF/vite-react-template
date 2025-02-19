import { ReactNode } from "react"

export type HelloWorldProps = {
  example?: string
}

export type HelloWorldComponent = (props: HelloWorldProps) => ReactNode
