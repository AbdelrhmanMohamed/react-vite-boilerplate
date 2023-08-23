import { useRef, useState } from "react";
// import type { FC } from "react";

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);
  const refEl = useRef("");

  const handelClick = () => {
    setCount((prev) => (prev || 0) + 1);
    refEl.current = "ss";
  };

  return (
    <div>
      <button onClick={handelClick}>click {count}</button>
    </div>
  );
}
