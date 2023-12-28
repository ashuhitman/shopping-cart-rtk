import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Cart/cartActions";

function Card({ item, setShowCheckOut }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const show = items.find((i) => i.id === item.id);
  return (
    <div className="shadow-md  md:w-[220px] rounded-md hover:shadow-lg flex flex-col">
      <div className="h-[150px] md:h-[200px]">
        <img src={item.imgUrl} className="h-full w-full rounded-t-md" />
      </div>
      <div className="p-2 flex-1">
        <b>{item.company}</b>
        <p>{item.name}</p>
        <b>Rs. {item.price}</b>
      </div>
      <div className="p-2 flex justify-end items-end">
        <button
          className="bg-pink-400 pb-1 px-2 rounded text-white hover:shadow-md font-bold"
          onClick={() =>
            show ? setShowCheckOut(true) : dispatch(addToCart(item))
          }
        >
          {show ? "Go To Cart" : "Add to Bag"}
        </button>
      </div>
    </div>
  );
}

export default Card;
