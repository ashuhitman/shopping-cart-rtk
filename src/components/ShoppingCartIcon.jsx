import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from "./Dropdown";
import CircularComponnet from "./CircularComponnet";

function ShoppingCartIcon({ items }) {
  return (
    <div className="relative cursor-pointer">
      <FaShoppingCart color="yellow" size={22} />
      {items.length > 0 && (
        <div className="absolute top-[-8px] right-[-10px] ">
          <CircularComponnet number={items.length} customClass="bg-red-600" />
        </div>
      )}
    </div>
  );
}

export default ShoppingCartIcon;
