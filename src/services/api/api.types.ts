export type AxiosFetcher = <TData, TVariables>(
  operation: string,
  variables?: TVariables | undefined,
) => () => Promise<TData>
