import React from "react";

export default function WhoWeAreComponent() {
  return (
    <div className="bg-blue-600 px-[2em] w-full items-center gap-3 flex py-4 flex-col text-center text-white">
      <h1 className="text-2xl font-bold">who we are?</h1>
      <p
        className="text-xl 
        lg:w-2/6
        sm:w-4/6
        "
      >
        We are a cross-functional team, skilled in fields involving the
        production and marketing of visual digital and non-digital content.
      </p>
      <button className="bg-white text-blue-600 border-2 border-blue-400 py-1 px-3 rounded text-lg">Learn More</button>
    </div>
  );
}
