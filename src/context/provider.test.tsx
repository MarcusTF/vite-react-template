import { render, screen } from "@testing-library/react"

import { Context } from "./context"
import { ContextProvider } from "./provider"

describe("ContextProvider", () => {
  it("renders children correctly", () => {
    render(
      <ContextProvider>
        <div>Test Child</div>
      </ContextProvider>,
    )
    expect(screen.getByText("Test Child")).toBeInTheDocument()
  })

  it("provides initial context", () => {
    render(
      <ContextProvider>
        <Context.Consumer>
          {({ state }) => <div>{state.user.isLoggedIn ? "Logged In" : "Logged Out"}</div>}
        </Context.Consumer>
      </ContextProvider>,
    )
    expect(screen.getByText("Logged Out")).toBeInTheDocument()
  })

  // Additional tests can be written to simulate state changes and actions dispatching
})
