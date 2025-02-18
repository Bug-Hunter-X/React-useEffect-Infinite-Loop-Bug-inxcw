```javascript
import React, { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  useEffect(() => {
    //Now this will only run once
    console.log('useEffect ran');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```