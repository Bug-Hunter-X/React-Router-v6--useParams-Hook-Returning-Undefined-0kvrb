```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product ID: {id}</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>}/>
      {/* More routes here if needed */}
    </Routes>
  );
}
export default App;
```