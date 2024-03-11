import { UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

import { mutations } from "./mutations"
import { queries } from "./queries"

export type * from "./queries"
export type * from "./mutations"

export type UseRestMutation<TVariables, TResponse> = (
  options?: UseMutationOptions<AxiosResponse<TResponse>, AxiosError<TResponse>, TVariables>,
) => UseMutationResult<AxiosResponse<TResponse>, AxiosError<TResponse>, TVariables>

export type UseRestQuery<TResponse> = (
  options?: UseQueryOptions<AxiosResponse<TResponse>, AxiosError<TResponse>>,
) => UseQueryResult<AxiosResponse<TResponse>, AxiosError<TResponse>>

export const rest = {
  mutations,
  queries,
}
