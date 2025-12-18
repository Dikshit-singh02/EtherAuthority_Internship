import { useState } from 'react';
import ReusableButton from './ReusableButton';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <ReusableButton label="Increment" onClick={increment} color="green" />
      <ReusableButton label="Decrement" onClick={decrement} color="red" />
      <ReusableButton label="Reset" onClick={reset} color="blue" />
    </div>
  );
}

export default Counter;
