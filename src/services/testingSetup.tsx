import "@testing-library/jest-dom/vitest"

import { cleanup } from "@testing-library/react"

import { ContextProvider } from "context"

import { Wrapper } from "./testingSetup.types"

export const ContextWrapper: Wrapper = ({ children }) => <ContextProvider>{children}</ContextProvider>

afterEach(() => {
  cleanup()
})
