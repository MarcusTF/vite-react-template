import { useMutation } from "@tanstack/react-query"
import { restRequest } from "api"

import { LoginResponse, LogoutResponse, UseLogin, UseLogout } from "./user.mutations.types"

/**
 * Perform a login mutation. (example)
 * @param options - The `UseMutationOptions` to pass to the `useMutation` hook.
 *
 * @example
 * import { rest } from "api"
 * const { mutate, isLoading, isError, error, data } = rest.mutations.user.useLogin()
 */
const useLogin: UseLogin = options =>
  useMutation({
    ...options,
    mutationKey: ["login"],
    mutationFn: async variables => await restRequest.post<LoginResponse>("/login", variables),
  })

/**
 * Perform a logout mutation. (example)
 * @param options - The `UseMutationOptions` to pass to the `useMutation` hook.
 *
 * @example
 * import { rest } from "api"
 * const { mutate, isLoading, isError, error, data } = rest.mutations.user.useLogout()
 */
const useLogout: UseLogout = options =>
  useMutation({
    ...options,
    mutationKey: ["logout"],
    mutationFn: async variables => await restRequest.post<LogoutResponse>("/logout", variables),
  })

export { useLogin, useLogout }
