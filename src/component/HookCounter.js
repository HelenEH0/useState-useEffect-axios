import React, { useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        {" "}
        Count is {counter}{" "}
      </button>
    </div>
  );
};

export default HookCounter;




// Hooks to be called  at the top level only and not in this inside loops, condition or nested functions
// Call them from only React Functional Component
