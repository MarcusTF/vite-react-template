import type { ImmerReducer } from "use-immer"

import { keys } from "./constants"
import { ContextProps } from "./context.types"
import { ReducerActionProps } from "./reducer.types"

/**
 * This is an {@linkcode ImmerReducer}, it's slightly different than the normal React useReducer.
 * It uses an immer draft to modify the state, and then returns the new state. Immer can either return a new state,
 * OR modify the draft, not both.
 *
 * {@link https://immerjs.github.io/immer/example-setstate#useimmerreducer | Read more}
 */
export const reducer: ImmerReducer<ContextProps, ReducerActionProps> = (draft, { type, payload }) => {
  switch (type) {
    case keys.LOGIN:
      /*
       * We're modifying the draft here, so we need to explicitly return void. You can alternatively modify the draft
       * and then "return" with nothing after, but this "return void" syntax is more concise if you're only modifying
       * one thing in the draft.
       *
       * Example of alternative syntax:
       *
       * draft.user = payload as ContextProps["user"]
       * return // (or "break")
       *
       * https://immerjs.github.io/immer/return/#inline-shortcuts-using-void
       */
      return void (draft.user = payload as ContextProps["user"])
    case keys.LOGOUT:
      return void (draft.user.isLoggedIn = false)
    default:
      return
  }
}
