import { produce } from "immer"

import { keys } from "./constants"
import { ContextProps } from "./context.types"
import { reducer } from "./reducer"

const initialState: ContextProps = {
  user: {
    isLoggedIn: false,
  },
}

describe("reducer", () => {
  it("should update the user when LOGIN action is dispatched", () => {
    const action = { type: keys.LOGIN, payload: { isLoggedIn: true } }
    // The reducer is intended to be used with immer, so we use the produce function to create a new state
    const newState = produce(initialState, draft => void reducer(draft, action))
    expect(newState?.user.isLoggedIn).toBe(true)
  })

  it("should update the user isLoggedIn property to false when LOGOUT action is dispatched", () => {
    const action = { type: keys.LOGOUT }
    // The reducer is intended to be used with immer, so we use the produce function to create a new state
    const newState = produce(initialState, initialState => void reducer(initialState, action))
    expect(newState?.user.isLoggedIn).toBe(false)
  })

  it("should return the same state when an invalid action is dispatched", () => {
    const action = { type: "INVALID_ACTION" }
    // The reducer is intended to be used with immer, so we use the produce function to create a new state
    const newState = produce(initialState, draft => void reducer(draft, action))
    expect(newState).toEqual(initialState)
  })
})
