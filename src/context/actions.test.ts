import { vitest } from "vitest"

import { actionsGenerator } from "./actions"
import { keys } from "./constants"

describe("actionsGenerator", () => {
  it("should dispatch a LOGOUT action when logout function is called", () => {
    const dispatch = vitest.fn()
    const actions = actionsGenerator(dispatch)
    actions.logout()
    expect(dispatch).toHaveBeenCalledWith({ type: keys.LOGOUT })
  })

  it("should dispatch a LOGIN action with the payload when login function is called", () => {
    const dispatch = vitest.fn()
    const actions = actionsGenerator(dispatch)
    const payload = { isLoggedIn: true }
    actions.login(payload)
    expect(dispatch).toHaveBeenCalledWith({ type: keys.LOGIN, payload })
  })
})
