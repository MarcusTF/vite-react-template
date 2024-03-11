import axios, { AxiosResponse } from "axios"

const BASE_URL = (import.meta.env.VITE_API_URL as string) || "http://localhost:3000"
export const GRAPHQL_URL = BASE_URL //`${BASE_URL}/graphql`

export const FETCH_PARAMS = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
}

export const restRequest = axios.create({
  baseURL: BASE_URL,
  headers: FETCH_PARAMS.headers,
})

export const axiosFetcher = <TData, TVariables>(operation: string, variables?: TVariables) => {
  return async () => {
    const { data: res } = await restRequest.post<AxiosResponse<TData>>(GRAPHQL_URL, { query: operation, variables })
    const { data } = res
    return data
  }
}
