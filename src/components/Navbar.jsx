import React from "react";
import { Link } from "react-router-dom";

export function Navbar({ setShowAbout }) {
  return (
    <nav className="flex justify-between items-center w-[98%] mx-auto py-4">
      <Link to={"/"}>
        <img src="images/logo.png" alt="rps" className="w-20 h-20 cursor-pointer" />
      </Link>
      <button
        className="p-4 duration-300 border-2 rounded-lg cursor-pointer hover:bg-white hover:text-black border-white-400 z-10"
        onClick={() => setShowAbout(true)}>
        About
      </button>
    </nav>
  );
}
