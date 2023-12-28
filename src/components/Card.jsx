import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Cart/cartActions";

function Card({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="shadow-md m-auto md:m-2 md:w-[220px] rounded-md hover:shadow-lg w-[80%]">
      <div className="h-[200px] ">
        <img src={item.imgUrl} className="h-full w-full rounded-t-md" />
      </div>
      <div className="p-2">
        <b>{item.company}</b>
        <p>{item.name}</p>
        <b>Rs. {item.price}</b>
      </div>
      <div className="p-2 flex justify-end">
        <button
          className="bg-pink-400 pb-1 px-2 rounded text-white hover:shadow-md font-bold"
          onClick={() => dispatch(addToCart(item))}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default Card;
