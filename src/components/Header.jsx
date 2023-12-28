import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";

function Header() {
  const { count, items } = useSelector((state) => ({
    count: state.count,
    items: state.items,
  }));
  return (
    <header className="bg-pink-500 text-white shadow-md ">
      <nav className="flex justify-between items-center py-2 md:px-6 px-3">
        <ul>
          <li>Home</li>
        </ul>
        <ul>
          <li>
            <ShoppingCartIcon items={items} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
