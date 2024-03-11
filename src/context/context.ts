import { createContext, useContext } from "react"

import { Actions } from "./actions.types"
import { InitialContext } from "./context.types"

export const initialContext: InitialContext = {
  state: {
    user: {
      isLoggedIn: false,
    },
  },
  actions: {} as Actions,
}

export const Context = createContext(initialContext)

/** Convenience hook for using the main context. */
export const useMainContext = () => useContext(Context)
