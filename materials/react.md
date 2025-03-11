# Controlled vs uncontrolled component

## Controlled
A controlled component is one where React controls the state of the form input. The value of the input is stored in the component's state and updated via an onChange event.

Pros of Controlled Components:
✔ Easier to manage and debug
✔ React has full control over the input value
✔ Allows validation and modifications before updating state

Cons:

❌ Slightly more boilerplate code
❌ Re-renders happen on every keystroke


## Uncontrolled
An uncontrolled component lets the DOM handle the input's value instead of React state. You use a ref to directly access the DOM element when needed.

Pros of Uncontrolled Components:
✔ Less re-renders since state updates are avoided
✔ Useful for integrating with non-React code (e.g., third-party libraries)

Cons:
❌ Harder to track and debug changes
❌ Cannot enforce validation easily before submission

When to Use Which?
Use controlled components when you need to manage the input dynamically, such as validation, conditional rendering, or real-time updates.
Use uncontrolled components when you need a simpler form without frequent updates, or when integrating with third-party libraries.

# Hooks
React Hooks are functions that let you use state and other React features without writing a class component.

Common hooks:
useState (state management)
useEffect (side effects)
useRef (DOM references)
useContext (global state)


# useEffect vs useLayoutEffect
useEffect runs asynchronously after rendering (good for API calls, event listeners).
useLayoutEffect runs synchronously before the browser paints the UI (useful for layout changes, DOM measurements or synchronizing animations).

# Optimization
Use useMemo() – Avoid unnecessary recalculations.
Use useCallback() – Memoize function references.
Virtualization – Load only what’s visible (e.g., react-window).
Lazy loading of modules

# Purpose of npm
What is the purpose of package.json in Node.js?
Answer:

It contains metadata about the project (name, version, scripts, dependencies). Manages dependencies and allow task automation

# Context
 Context is a built-in feature that provides a way to share values (like state, themes, authentication status, etc.) between components without having to pass props manually at every level. It helps avoid "prop drilling", where you pass data through multiple levels of components unnecessarily.
