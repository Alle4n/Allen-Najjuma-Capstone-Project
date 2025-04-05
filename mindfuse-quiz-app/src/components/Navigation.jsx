import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-purple-300 font-bold text-2xl p-16">
      <div className="max-w-7xl mx-auto text-center">
        <ul className="flex justify-center space-x-12">
          <li>
            <Link to="/" className=" hover:text-gray-300 transition duration-300">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/quiz" className="hover:text-gray-300 transition duration-300">Quiz</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/score" className="hover:text-gray-300 transition duration-300">Score</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
