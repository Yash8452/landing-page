import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2>Count is : {count}</h2>
        <div className="flex gap-2 justify-center items-center">
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className="p-2 rounded bg-green-500 hover:bg-green-500/80"
          >
            Increment
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount - 1)}
            className="p-2  rounded bg-red-500 hover:bg-red-500/80"
          >
            Decreament
          </button>
        </div>
      </div>
    </>
  );
}

export default Test;
