import React, { useState } from 'react';
import './Statemanagement.css';

function Statemanagement() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="button-group">
        <button className="counter-button increment" onClick={increment}>Increment</button>
        <button className="counter-button decrement" onClick={decrement}>Decrement</button>
        <button className="counter-button reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Statemanagement;
