import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function ShoppingCartIcon({ number }) {
  return (
    <div className="relative ">
      <FaShoppingCart color="yellow" size={20} />
      <div className="absolute top-[-8px] right-[-10px] z-10 rounded-full bg-red-600 h-4 w-4 flex items-center justify-center shadow-lg">
        {number}
      </div>
    </div>
  );
}

export default ShoppingCartIcon;
