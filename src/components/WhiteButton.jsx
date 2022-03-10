import React from "react";

export default function WhiteButton({ text }) {
  return (
    <button className="bg-white text-blue-600 border-2 border-blue-400 py-1 px-3 rounded text-lg">
      {text}
    </button>
  );
}
