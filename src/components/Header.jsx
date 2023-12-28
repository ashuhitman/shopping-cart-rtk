import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";

function Header({ setShowCheckOut }) {
  const items = useSelector((state) => state.items);
  return (
    <header className="bg-pink-500 text-white shadow-md ">
      <nav className="flex justify-between items-center py-2 md:px-6 px-3">
        <ul>
          <li
            className="cursor-pointer px-3 hover:pl-4 hover:pr-2 transition-all"
            onClick={() => {
              console.log("clicked home");
              setShowCheckOut(false);
            }}
          >
            Home
          </li>
        </ul>
        <ul>
          <li onClick={() => setShowCheckOut(true)}>
            <ShoppingCartIcon items={items} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
