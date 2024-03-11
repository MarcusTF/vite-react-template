import { render } from "@testing-library/react"

import Login from "./Login"

describe("Login Component", () => {
  it("renders Login component without crashing", () => {
    expect(() => render(<Login />)).not.toThrow()
  })
})
