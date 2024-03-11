import { FC } from "react"

export type HelloWorldProps = {
  // types
}

export type HelloWorldComponent = (props: HelloWorldProps) => ReturnType<FC>
