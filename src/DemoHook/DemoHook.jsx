import React, { useState } from "react";

export default function DemoHook() {
  const [like, setLike] = useState(100);
  let handleLikePlus = () => {
    setLike((like) => like + 1);
  };
  return (
    <div className="text-center text-lg py-5">
      <button
        className="text-red-600 border-solid border-2 border-red-500 hover:bg-red-500 hover:text-white hover:focus-visible:bg-red-500 rounded-lg px-5 py-3 duration-500"
        onClick={handleLikePlus}
      >
        Increase
      </button>
      <span className="block">{like}</span>
    </div>
  );
}
