import { Actions } from "./actions.types"

export type ReducerActionProps = {
  type: string
  payload?: Parameters<Actions[keyof Actions]>[0]
}
