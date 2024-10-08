"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ isMenuOpen }) {
  const [value, setValue] = useState("");

  return (
    <div className={`relative ${isMenuOpen ? "w-full" : "w-56 max-w-xs"}`}>
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        className="w-full pl-10 pr-4 py-1 text-black rounded-xl"
        placeholder="Search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
