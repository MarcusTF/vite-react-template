import { ImmerDispatch } from "./actions.types"
import { keys } from "./constants"
import { ContextProps } from "./context.types"

/** Generates actions for dispatching events. */
export const actionsGenerator = (dispatch: ImmerDispatch) => ({
  logout: () => {
    dispatch({ type: keys.LOGOUT })
  },
  login: (payload: ContextProps["user"]) => {
    dispatch({ type: keys.LOGIN, payload })
  },
})
