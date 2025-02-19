import { ReactNode } from "react"

export type DashboardProps = { example?: string }

export type DashboardComponent = (props: DashboardProps) => ReactNode
