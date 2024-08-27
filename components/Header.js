"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";

function Header({ reviews }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between px-10 py-4 font-header items-center">
        <div>
          <h1 className="text-3xl">
            <a href="/">profAI</a>
          </h1>
        </div>
        <nav className="hidden md:flex justify-between w-5/12 items-center text-lg">
          <a
            className="px-3 py-2 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
            href="/professorreviews"
          >
            professor reviews
          </a>
          <a
            className="px-3 py-2 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
            href="/chatbot"
          >
            chat
          </a>
          <SearchBar isMenuOpen={false} reviews={reviews} />
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full text-center p-4">
          <a
            onClick={toggleMenu}
            className="block py-2 hover:bg-black hover:text-white rounded-md transition duration-300 ease-in-out"
            href="/professorreviews"
          >
            professor reviews
          </a>
          <a
            onClick={toggleMenu}
            className="block py-2 hover:bg-black hover:text-white rounded-md transition duration-300 ease-in-out"
            href="/chatbot"
          >
            chat
          </a>
          <SearchBar isMenuOpen={true} />
        </div>
      )}
    </header>
  );
}

export default Header;
