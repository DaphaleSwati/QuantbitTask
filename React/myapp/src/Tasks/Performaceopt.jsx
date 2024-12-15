import React, { memo, useState } from 'react';
import './Performanceopt.css';

const ExpensiveComponent = memo(() => {
  console.log("Rendering ExpensiveComponent");
  return <div className="expensive">Expensive Component</div>;
});

function Performanceopt() {
  const [count, setCount] = useState(0);

  return (
    <div className="performance-container">
      <h1>React Performance Optimization</h1>
      <div className="button-group">
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <p>Count: {count}</p>
      <ExpensiveComponent />
    </div>
  );
}

export default Performanceopt;
