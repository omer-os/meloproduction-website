import React from "react";

export default function BlueButton({ text }) {
  return (
    <button className="flex justify-between items-center text-white bg-blue-600 py-1 md:px-4 px-2 md:text-lg rounded capitalize font-bold">
      {text}
    </button>
  );
}
