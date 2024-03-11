import { BrowserRouter, Route, Routes } from "react-router-dom"
import { render } from "@testing-library/react"

import { Context, ContextProps } from "context"
import { Actions } from "context/actions.types"

import PrivateRoute from "./PrivateRoute"

const uiWithContext = (context: ContextProps) => (
  <Context.Provider value={{ state: context, actions: {} as Actions }}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<div>Login</div>} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<div>PrivateRoute</div>} />
          <Route path='/private' element={<div>PrivateRoute2</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Context.Provider>
)
const testData: ContextProps = {
  user: {
    isLoggedIn: false,
  },
}
describe("Private Route", () => {
  it("renders the component if user is logged in", () => {
    testData.user.isLoggedIn = true
    render(uiWithContext(testData))
    expect(document.body).toHaveTextContent("PrivateRoute")
    expect(document.body).not.toHaveTextContent("Login")
  })
  it("redirects to login if user is not logged in", () => {
    testData.user.isLoggedIn = false
    render(uiWithContext(testData))
    expect(document.body).not.toHaveTextContent("PrivateRoute")
    expect(document.body).toHaveTextContent("Login")
  })
  it("if user is logged in, and then logs out, redirects to login", () => {
    testData.user.isLoggedIn = true
    const mockUI = render(uiWithContext(testData))
    testData.user.isLoggedIn = false
    mockUI.rerender(uiWithContext(testData))
    expect(document.body).not.toHaveTextContent("PrivateRoute")
    expect(document.body).toHaveTextContent("Login")
  })
})
