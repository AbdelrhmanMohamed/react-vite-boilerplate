import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);
  const handelClick = () => {
    setCount((prev) => (prev || 0) + 1);
  };
  return (
    <div>
      <button onClick={handelClick}>click {count}</button>
    </div>
  );
}
