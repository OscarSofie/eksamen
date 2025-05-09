"use client";

import { useState } from "react";

const Button = () => {
  const [isWhite, setIsWhite] = useState(false);

  return (
    <button
      onClick={() => setIsWhite(!isWhite)}
      className={`px-4 py-2 rounded ${
        isWhite ? "bg-white text-black" : "bg-blue-500 text-white"
      }`}
    ></button>
  );
};

export default Button;
