import React from "react";

export default function RedButton({ text, reversed }) {
  return (
    <button
      className={`
    my-3 py-2 px-6 font-bold w-max rounded mx-auto z-20
    
    
    ${reversed
        ? "bg-white text-red-800"
        : `bg-red-600 text-white`}
    `}


    
    >
      {text}
    </button>
  );
}
