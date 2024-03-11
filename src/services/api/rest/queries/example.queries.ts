import { useQuery } from "@tanstack/react-query"
import { restRequest } from "api"

import { Example, UseExample } from "./example.queries.types"

/**
 * Perform an example query
 * @param options - The UseQueryOptions to pass to the useQuery hook. `queryFn`
 * is already defined, `queryKey` is already defined as `["Example"]` but can be
 * overwritten.
 *
 * @example
 * import { rest } from "api"
 * const { mutate, isLoading, isError, error, data } = rest.queries.clients.useExample()
 */
const useExample: UseExample = options =>
  useQuery({
    queryKey: ["Example"],
    ...options, // can overwrite queryKey if needed
    queryFn: () => restRequest.get<Example>("/example"),
  })

export { useExample }
