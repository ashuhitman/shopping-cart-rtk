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
      <nav className="flex justify-between items-center py-2 px-6">
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
