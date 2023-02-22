## Factors

- How complex is it really?
- Where does is the single source of truth stored?
- Is Optimistic UI necessary?

## Frontend represents the state of the backend

We are fetching data an displaying it. There is no need for lots of client only state and no or only in few cases need for optimistic UI.

- GraphQL: Urql / Apollo / Relay / React-Query
- Rest: Tanstack query / swc
- RPC style: trpc (new contender)

Overengineering:

- Redux (too clumsy for this case)

But we have a lot of data and want fast views: Use the normalized Cache in urql / Apollo.

### Examples

- Bank Account App
- Admin Dashboard
- E-Commerce Shop

## You have lots of logic on the client and only parts are sent to the backend

### Use what's there!

Local

- useState (local & simple)
- useReducer (great if you have the feeling this become more than a boolean)

Global

- Context (for simpler global cases)

### When it doesn't cut it anymore

Effects based

- useReducer (you ideally have started here)
- Zustand (for simpler global cases, but with selectors)
- Redux (because you know it already)
- Xstate (for complex cases - bit clumsy with TypeScript and a steep learning curve, but once you are hooked you don't want to go back)

Observable based

- Mobx
- Recoil
- Jotai / Valtio (dai-shi: my general recommendation is jotai over valtio) https://github.com/pmndrs/valtio/discussions/128

And obviosuly you can combine fetch libraries with local statemenent. Here it gets tricky and you need to think about the tradeoffs and make sure things stay easy. My nightmare: Apollo cache that was partially synced to MobX. Two competing concept!
