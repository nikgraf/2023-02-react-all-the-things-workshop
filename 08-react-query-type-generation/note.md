## React Query

- gaining a lot of traction
- multi tool for data fetching!

- no normalized cache -> Go with Urql if you need it

## Type Generation

In both cases (react-query and urql) we can generate types for our queries and mutations.

Sorry, let me correct myself: WE MUST generate types for our queries and mutations.

## To the rescue: GraphQL Code Generator

- https://the-guild.dev/graphql/codegen

## What about REST?

- Type manually
  or if you have OPEN API you can use it
- https://tkdodo.eu/blog/type-safe-react-query
  - https://www.zodios.org/
  - https://trpc.io/

## Urql

Personal opinion:

> I prefer urql over react-query, because the react-query style feels a bit clumsy to me.
> I just want hooks to be generated.

## Exercise

Add type generation for the react-query

1. add a codegen.ts file to the root of the project

```ts
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
```

2. Add a script to the package.json

```json
"codegen": "graphql-codegen --config codegen.ts"
```

3. Run the script

Import `import { graphql } from "./gql/gql";` and replace `gql` with `graphql` part

```
graphql(`query here`)
```

Enjoy the type completion!

## Resources

- https://the-guild.dev/graphql/codegen/docs/guides/react-vue
