## Children

```tsx
<Card>
  <div>Hello World</div>
</Card>
```

Let's use children to make our components more re-usable!

## Children as another prop

You can also pass React components to other props!

e.g.

```tsx
<Tooltip label={<span classname="primary-200">This is save button.</span>}>
  <button>Save post</button>
</Tooltip>
```

this is the same as

```tsx
<Tooltip
  label={<span classname="primary-200">This is save button.</span>}
  children={<button>Save post</button>}
/>
```

We even see this in React core components!

```tsx
<Suspense fallback={<div>loading …</div>}>
  <MarkdownPreview />
</Suspense>
```

## Manipulate children

You can do all sorts of things with children. You probably need it rarely but it's good to know it exists.

### More useful

- Children.map
- Children.toArray
- Children.only

### Less useful?

- Children.forEach
- Children.count

### Clone to overwrite props

React.clone … clone the child and assign the name property to it! -> not ideal for performance?

## Exercise

Currently the SortableList is quite inflexible.

- It only works with a list of strings.
- We want to make it more flexible by allowing it to work with any type React component

Refactor the SortableList component to accept a list of React components as children and still maintain the sorting functionality.

## References

- https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children
