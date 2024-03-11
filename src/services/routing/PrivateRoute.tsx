import type { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"

import { useMainContext } from "context"

import { PrivateRouteProps } from "./PrivateRoute.types"

/**
 * Checks if the user is logged in.
 * If the user is logged in, it renders the children components.
 * If the user is not logged in, it redirects the user to the login page.
 *
 * @returns {JSX.Element} The Outlet component if the user is logged in, otherwise the Navigate component.
 */
const PrivateRoute: FC<PrivateRouteProps> = ({ invert }) => {
  const { state } = useMainContext()

  const { user } = state

  if (invert) return user.isLoggedIn ? <Navigate to='/' /> : <Outlet /> // Invert the logic (useful for login page)
  return user.isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
