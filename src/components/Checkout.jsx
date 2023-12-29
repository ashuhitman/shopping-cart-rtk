import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
  resetCart,
} from "../redux/Cart/cartActions";
import CircularComponnet from "./CircularComponnet";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function Checkout({ setShowCheckOut }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // Calculate the total price

  useEffect(() => {
    if (items.length > 0) {
      const calculatedTotalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity * 82.89,
        0
      );
      setTotalPrice(Math.round(calculatedTotalPrice * 100) / 100);
    }
    if (items.length === 0 && !orderPlaced) setShowCheckOut(false);
  }, [items]);
  if (orderPlaced) {
    return (
      <div className=" w-[90%] md:w-[300px] mx-auto border-[1px] border-black-400 m-4 p-4">
        <div>Item placed of worth Rs. {totalPrice}</div>
        <button
          className="bg-pink-500 w-full py-2 px-2 mt-4 text-white"
          onClick={() => setShowCheckOut(false)}
        >
          Go To HomePage
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row justify-center m-4 md:gap-4">
      <div className="w-full md:w-[50%]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-start gap-6 relative border-[1px] border-black-400 mb-2 hover:shadow-md"
          >
            <MdCancel
              size={20}
              className="absolute top-1 right-1 cursor-pointer z-50"
              onClick={() => dispatch(removeFromCart(item.id))}
            />
            <div className="h-[100px] w-[90px]">
              <img src={item.image} className="h-full w-full" />
            </div>
            <div>
              <div>
                <b>{item.title}</b>
              </div>
              <div>{item.category}</div>
              <div>Rs. {Math.round(item.price * 82.89 * 100) / 100}</div>
            </div>
          </div>
        ))}
      </div>
      <div className=" p-4 h-fit border-[1px] border-black-400 md:max-w-[400px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-1 place-content-center min-w-[250px] py-4 items-center "
          >
            <div className="min-w-4 col-span-1 flex items-center">
              <CiCircleMinus
                size={20}
                className="cursor-pointer hover:text-red-400"
                onClick={() => dispatch(decreaseFromCart(item.id))}
              />
              <CircularComponnet
                number={item.quantity}
                customClass="bg-green-500 text-white"
              />
              <CiCirclePlus
                size={20}
                className="cursor-pointer hover:text-slate-600"
                onClick={() => dispatch(addToCart(item))}
              />
            </div>
            <div className=" col-span-3">{item.title}</div>{" "}
            <div className=" col-span-1"> Rs. {item.price}</div>
          </div>
        ))}
        <div className="flex justify-end py-4">
          Total: Rs. {Math.round(totalPrice * 100) / 100}
        </div>
        <button
          className="bg-pink-500 w-full py-2 px-2 mt-4 text-white"
          onClick={() => {
            setOrderPlaced(true);
            dispatch(resetCart());
          }}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default Checkout;
