import { Actions } from "./actions.types"

export interface ContextProps {
  user: {
    isLoggedIn: boolean
  }
}

export type InitialContext = {
  state: ContextProps
  actions: Actions
}
