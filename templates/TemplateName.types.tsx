import { ReactNode } from "react"

export type TemplateNameProps = {
  example?: string
}

export type TemplateNameComponent = (props: TemplateNameProps) => ReactNode
