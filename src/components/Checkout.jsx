import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
} from "../redux/Cart/cartActions";
import CircularComponnet from "./CircularComponnet";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function Checkout({ setShowCheckOut }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // Calculate the total price
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  useEffect(() => {
    if (items.length === 0) setShowCheckOut(false);
  }, [items]);
  return (
    <div className="flex flex-col md:flex-row justify-center m-4 md:gap-4">
      <div className="w-full md:w-[50%]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-start gap-6 shadow-md relative border-1 border-gray-400 mb-2"
          >
            <MdCancel
              size={20}
              className="absolute top-2 right-2 cursor-pointer"
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
      <div className="shadow-lg p-4 h-fit border-1 border-gray-400 md:max-w-[400px]">
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
        <button className="bg-pink-500 w-full py-2 px-2 mt-4 text-white">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default Checkout;
