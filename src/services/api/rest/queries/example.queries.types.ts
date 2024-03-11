import { UseRestQuery } from "rest"

export interface Example {
  question: string
  published_at: string
  choices: Choice[]
}

interface Choice {
  choice: string
  votes: number
}

export type UseExample = UseRestQuery<Example>
