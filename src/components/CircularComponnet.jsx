import React from "react";

function CircularComponnet({ number, customClass }) {
  return (
    <div
      className={`z-10 rounded-full h-[18px] w-[18px] flex items-center justify-center shadow-lg text-xs font-bold ${customClass}`}
    >
      {number}
    </div>
  );
}

export default CircularComponnet;
