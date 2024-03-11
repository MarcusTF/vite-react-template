import type { CodegenConfig } from "@graphql-codegen/cli"
import type { NearOperationFileConfig } from "@graphql-codegen/near-operation-file-preset"

const GQL_URL = process.env.VITE_API_URL || "http://localhost:4000" // + "/graphql" // the example doesn't need the /graphql path

const config: CodegenConfig = {
  overwrite: true,
  // This is the graphql endpoint where the schema is located.
  schema: GQL_URL,
  documents: "src/**/!(*.generated).{ts,tsx,graphql}",
  generates: {
    "src/services/api/graphql/baseTypes.ts": {
      plugins: ["typescript"],
      config: {
        defaultScalarType: "unknown",
      },
    },
    "src/": {
      // this will colocate the generated types with the graphql operations
      preset: "near-operation-file",
      presetConfig: {
        extension: ".gql.tsx",
        // location of the base types file
        baseTypesPath: "services/api/graphql/baseTypes.ts",
      } as NearOperationFileConfig, // for auto-complete
      plugins: [
        {
          "typescript-operations": {
            defaultScalarType: "unknown",
          },
        },
        {
          "typescript-react-query": {
            reactQueryVersion: 5,
            defaultScalarType: "unknown",
          },
        },
      ],
      config: {
        withHooks: true,
        fetcher: {
          func: "api#axiosFetcher",
          isReactHook: false,
        },
        defaultScalarType: "unknown",
      },
      // This will run prettier on the generated files
      hooks: { afterAllFileWrite: ["prettier --config .prettierrc --write"] },
    },
  },
}

export default config
