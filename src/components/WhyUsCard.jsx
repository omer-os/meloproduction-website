import React from "react";
export default function WhyUsCard({ title, description, number }) {
  return (
    <div className="reason bg-gray-100 sm:sm:px-5 gap-3 items-center flex">
      <div className="text-[120px] font-extrabold text-gray-400">{number}</div>
      <div className="right flex flex-col">
        <h3 className="sm:text-lg font-bold">{title}</h3>
        <p className="sm:text-md text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
