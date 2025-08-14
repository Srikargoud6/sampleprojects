import { useState } from "react";

import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const minusCount = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={minusCount}>-</button>
      <h2>{count}</h2>
      <button onClick={addCount}>+</button>
    </div>
  );
};

export default Counter;
