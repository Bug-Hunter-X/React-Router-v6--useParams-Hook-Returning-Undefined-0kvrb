In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  This leads to `undefined` values for route parameters.  For example:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // Incorrect usage
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>}/>
    </Routes>
  );
}
```

The `useParams` hook must be used within a component rendered by the `<Route>` element's `element` prop.  This component will then have access to the route params.
