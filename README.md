# React Router v6 useParams Hook Bug

This repository demonstrates a common error when using the `useParams` hook in React Router v6:  getting `undefined` values for route parameters. The issue arises from using `useParams` outside a component that is rendered within a route.  The provided solution shows the correct placement of the hook.

## Bug
The bug is demonstrated in `bug.js`. The `useParams` hook is used in a component, `MyComponent`, which is not directly within a route element.

## Solution
The `bugSolution.js` file shows the corrected code where `useParams` is used correctly inside a component that is rendered by the `<Route>` component's `element` prop.
