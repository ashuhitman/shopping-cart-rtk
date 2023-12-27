import React from "react";

function Card({ item }) {
  return (
    <div className="shadow-md w-[220px] rounded-md">
      <div className="h-[200px] ">
        <img src={item.imgUrl} className="h-full w-full rounded-md" />
      </div>
      <div className="p-2">
        <b>{item.company}</b>
        <p>{item.name}</p>
        <b>Rs. {item.price}</b>
      </div>
      <div className="p-2 flex justify-end">
        <button className="bg-pink-400 py-1 px-2 rounded text-white">
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default Card;
