import { FC, PropsWithChildren } from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useImmerReducer } from "use-immer"

import { actionsGenerator } from "./actions"
import { Context, initialContext } from "./context"
import { reducer } from "./reducer"

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: process.env.NODE_ENV !== "development" } },
})

/**
 * Provides context and providers for {@link Context|managing state},
 * {@link QueryClientProvider|querying data}, and {@link BrowserRouter|routing}.
 */
export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialContext.state)

  const actions = actionsGenerator(dispatch)

  return (
    <QueryClientProvider client={client}>
      {import.meta.env.DEV ? <ReactQueryDevtools initialIsOpen={false} /> : null}
      <Context.Provider value={{ state, actions }}>
        <BrowserRouter>{children}</BrowserRouter>
      </Context.Provider>
    </QueryClientProvider>
  )
}
