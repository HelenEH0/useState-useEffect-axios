import React, { useState } from "react";

const HookCounter2 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
      setCount(count+5);
  }
  return (
    <div>
      Count: {count} &nbsp;
      <button onClick={() => setCount(initialCount)}> Reset</button> &nbsp;
      <button onClick={() => setCount(count + 1)}> Increment</button> &nbsp;
      <button onClick={() => setCount(count - 1)}> Decrement</button> &nbsp;
      <button onClick = {incrementFive}> Increase by 5</button>
    </div>
  );
};

export default HookCounter2;
