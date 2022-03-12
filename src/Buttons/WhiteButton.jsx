import React from "react";

export default function WhiteButton({ text }) {
  return (
    <button className="bg-white active:scale-95 transition-all duration-100 text-blue-600 border-2 border-blue-400 py-1 px-3 rounded text-lg">
      {text}
    </button>
  );
}
