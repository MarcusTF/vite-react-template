import { render } from "@testing-library/react"

import HelloWorld from "./HelloWorld"

describe("HelloWorld Component", () => {
  it("renders HelloWorld component without crashing", () => {
    expect(() => render(<HelloWorld />)).not.toThrow()
  })
})
