
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/query",
  documents: "src/**/*.gql",
  generates: {
    "src/graphql/graphql.tsx": {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
    ],
      config: {
        withHooks: true,
        constEnums: true,
        immutableTypes: true,
        typesPrefix: "I",
        enumPrefix: false
      }
    }
  }
};

export default config;
