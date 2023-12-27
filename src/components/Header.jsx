import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartIcon from "./ShoppingCartIcon";

function Header() {
  return (
    <header className="bg-pink-500 text-white shadow-md">
      <nav className="flex justify-between items-center py-2 px-4">
        <ul>
          <li>Home</li>
        </ul>
        <ul>
          <li>
            <ShoppingCartIcon number={4} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
