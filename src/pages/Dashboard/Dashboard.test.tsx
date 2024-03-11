import { render } from "@testing-library/react"

import Dashboard from "./Dashboard"

describe("Dashboard Component", () => {
  it("renders Dashboard component without crashing", () => {
    expect(() => render(<Dashboard />)).not.toThrow()
  })
})
