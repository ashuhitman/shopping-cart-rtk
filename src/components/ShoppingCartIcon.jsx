import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from "./Dropdown";
import CircularComponnet from "./CircularComponnet";

function ShoppingCartIcon({ items }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to close dropdown when clicking outside of it
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Add event listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the dropdown is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative cursor-pointer" ref={dropdownRef}>
      <FaShoppingCart color="yellow" size={22} onClick={toggleDropdown} />
      {items.length > 0 && (
        <div className="absolute top-[-8px] right-[-10px] ">
          <CircularComponnet number={items.length} customClass="bg-red-600" />
        </div>
      )}
      {isDropdownOpen && <Dropdown items={items} />}
    </div>
  );
}

export default ShoppingCartIcon;
