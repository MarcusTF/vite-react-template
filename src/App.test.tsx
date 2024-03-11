import { render } from "@testing-library/react"
import { describe, it } from "vitest"

import { ContextWrapper } from "services/testingSetup"

import App from "./App"

describe("App", () => {
  it("renders the App component without crashing", () => {
    expect(() => render(<App />, { wrapper: ContextWrapper })).not.toThrow()
  })
})
