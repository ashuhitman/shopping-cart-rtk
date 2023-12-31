import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function Card({ item, setShowCheckOut }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const show = items.find((i) => i.id === item.id);
  return (
    <div className="shadow-md  md:w-[190px] rounded-md hover:shadow-lg flex flex-col">
      <div className="h-[150px] ">
        <img src={item.image} className="h-full w-full rounded-t-md " />
      </div>
      <div className="p-2 flex-1 text-sm">
        <b>{item.title}</b>
        <p>{item.category}</p>
        <b>Rs. {Math.round(item.price * 100) / 100}</b>
      </div>
      <div className="p-2">
        <button
          className="bg-pink-400 s px-2 py-2 w-full rounded text-white hover:shadow-md font-bold"
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
