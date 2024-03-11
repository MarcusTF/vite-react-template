import { render } from '@testing-library/react'

import { ContextWrapper } from 'services/testingSetup'

import HelloWorld from './HelloWorld'

describe("HelloWorld Component", () => {
  it("renders HelloWorld component without crashing", () => {
    expect(() => render(<HelloWorld />,{wrapper: ContextWrapper})).not.toThrow()
  })
})
