import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-300 font-bold text-2xl p-5 sm:p-16 mb-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="sm:hidden flex justify-between items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex justify-center space-x-0 sm:space-x-12 mt-4 sm:mt-0`}
        >
          <li>
            <Link to="/" className="hover:text-gray-300 transition duration-300">
              Home
            </Link>
          </li>
          <li className="max-sm:hidden">|</li>
          <li>
            <Link to="/quiz" className="hover:text-gray-300 transition duration-300">
              Quiz
            </Link>
          </li>
          <li className="max-sm:hidden">|</li>
          <li>
            <Link to="/score" className="hover:text-gray-300 transition duration-300">
              Score
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
