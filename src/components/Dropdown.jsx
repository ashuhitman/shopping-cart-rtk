import React from "react";
import CircularComponnet from "./CircularComponnet";

function Dropdown({ items }) {
  if (items.length === 0) return <></>;

  // Calculate the total price
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute bg-slate-800 top-[37px] right-[-9px] shadow-2xl z-30 p-2 px-4 before:content-['_'] before:h-[20px] before:w-[20px] before:absolute before:top-[-10px] before:right-5 before:bg-slate-800 before:rotate-45 rounded">
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 gap-1 place-content-center min-w-[250px] py-2 items-center"
        >
          <div className="min-w-4">
            <CircularComponnet
              number={item.quantity}
              customClass="bg-green-500"
            />
          </div>
          <div className=" col-span-2">{item.name}</div>{" "}
          <div className=" col-span-1"> Rs. {item.price}</div>
        </div>
      ))}
      <div className="border-t-2 border-black py-2 flex justify-end">
        Total: Rs {totalPrice}
      </div>
    </div>
  );
}

export default Dropdown;
