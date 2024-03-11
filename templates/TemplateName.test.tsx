import { render } from "@testing-library/react"

import TemplateName from "./TemplateName"

describe("TemplateName Component", () => {
  it("renders TemplateName component without crashing", () => {
    expect(() => render(<TemplateName />)).not.toThrow()
  })
})
