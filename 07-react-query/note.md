## Tanstack React Query

### Interesting Defaults

- separation between query & mutation
- refetchOnWindowFocus
- inactive queries are cached for 5min
- retries 3 times
- structurally shared to detect if data has actually changed and if not, the data reference remains unchanged -> great for `useMemo` and `useCallback`` dependencies

### Interesting Options

- staleTime to avoid re-fetching

To change this behavior, you can configure your queries both globally and per-query using the staleTime option. Specifying a longer staleTime means queries will not refetch their data as often

## Resources

- https://tanstack.com/query/latest/docs/react/community/tkdodos-blog#10-react-query-as-a-state-manager
- https://medium.com/doctolib/react-query-cachetime-vs-staletime-ec74defc483e
