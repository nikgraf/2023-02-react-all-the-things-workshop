# What does performance mean in the context of a web application?

I see two major aspects:

- initial loading time
- experience while using the application (percieved performance)

## Initial loading time

- Ship less code
  - Remove dependencies
  - Tree shaking
- Ship code later
  - Code-splitting (React.lazy)

## Experience while using the application (percieved performance)

- Styling (tailwind)
- useLayoutEffect (sync effects)

### Do less work is the only way (or at least delay it)

- less computation (useMemo, no dynamic styles -> tailwind)
- delay the less important works -> concurrency
- less renders (memo, useCallback)
- avoid jumping UI (useLayoutEffect)

Your machine can only go as fast as it can.
There are a million micro-optimizations you can do. Often they are not worth it.
Sometimes they are

If you want to see microoptimizations:

- Cheng Lou
  - https://chenglou.me/
    - https://twitter.com/_chenglou/status/1621056488625295361
  - Tldraw https://twitter.com/_chenglou/status/1570895293784391681
- Yjs & Lib0 by Kevin Jahns
  - https://github.com/yjs/yjs
  - https://josephg.com/blog/crdts-go-brrr/

Or sometimes use WASM (but before read this story https://zaplib.com/docs/blog_post_mortem.html)

### Measure

_Disclaimer_: From my experience it's very rare that you need to profile yourself. That said sometimes you notice the experience as good as you might like it to be.

## Why is that so?

https://philippspiess.com/static/805b72e5fe22f38f3f794de9668a14cc/42736/event-loop-browser.png

## Measure first!

We want to measure different things.
Let's dive right into a demo.

## Demo

1. The `calculateNodeHeight` function is creating a DOM element, applies the content, applies styles, measures the height and then returns height. Sounds like a lot of work! Let's measure the impact with `performance.now`
2. Let's add a slowCalculation and measure again. The experience also is signifiantly wrose.
3. Switch to `sometimesSlowCalculation`
4. Show the impact in React Profiler -> nothing there
5. Show the impact in the Chrome Profile -> see results
6. Move the function to the render function and show the impact in React Profiler -> see results

## One more thing!

Depending on your target audience this might not be good enough. If you target low end mobile devices you might want to try emulating that environment.

## Exercise

## Measure

1. Use `preformance.now` to measure the impact of your `useLayoutEffect`.

```
const t0 = performance.now();
const t1 = performance.now();
console.log(`${t1 - t0} ms`);
```

2. Use `sometimesSlowCalculation` in the `useLayoutEffect` and verify it's impact in Chrome Profiler.
3. Use `sometimesSlowCalculation` in the `render` and verify it's impact in React Profiler.
4. Throttle the CPU (6x) and go through steps again.

**Bonus Exercise**: Use the `calculateNodeHeight`'s cache and measure the performance impact! Especially with a throttled CPU.

## Demo

Show impact on low end device by reducing the CPU in Chrome Profile.
