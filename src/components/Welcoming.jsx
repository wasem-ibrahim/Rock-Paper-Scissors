import React from "react";
import { Link } from "react-router-dom";
import { FaRegHandScissors, FaRegHandRock, FaRegHandPaper } from "react-icons/fa";
import "./welcoming.css";

export function Welcoming() {
  return (
    <>
      <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-black h-screen  text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center w-[98%] mx-auto py-4">
          <img src="../public/images/logo.png" alt="rps" className="w-20 h-20" />
          <button className="border-2 border-white-400 rounded-lg p-4 cursor-pointer">About</button>
        </nav>

        {/* <Link to={"main"}>Computer</Link> */}

        {/* Floating Icons */}
        <div>
          <div className="flex justify-around absolute w-full bottom-[-40px]  ">
            <FaRegHandRock size={30} className="spinAscend" />
            <FaRegHandScissors size={30} className="spinAscend" />
            <FaRegHandPaper size={30} className="spinAscend" />
            <FaRegHandRock size={30} className="spinAscend" />
            <FaRegHandPaper size={30} className="spinAscend" />
          </div>

          <div className="flex justify-around absolute w-full bottom-[-40px]  ">
            <FaRegHandRock size={30} className="spinAscend testing" />
            <FaRegHandPaper size={30} className="spinAscend testing" />
            <FaRegHandRock size={30} className="spinAscend testing" />
            <FaRegHandPaper size={30} className="spinAscend testing" />
          </div>

          <div className="flex justify-around absolute w-full bottom-[-40px] ">
            <FaRegHandRock size={30} className="spinAscend testing2" />
            <FaRegHandPaper size={30} className="spinAscend testing2" />
            <FaRegHandRock size={30} className="spinAscend testing2" />
            <FaRegHandPaper size={30} className="spinAscend testing2" />
            <FaRegHandRock size={30} className="spinAscend testing2" />
          </div>

          <div className="flex justify-around absolute w-full bottom-[-40px] ">
            <FaRegHandRock size={30} className="spinAscend testing3" />
            <FaRegHandPaper size={30} className="spinAscend testing3" />
            <FaRegHandRock size={30} className="spinAscend testing3" />
            <FaRegHandPaper size={30} className="spinAscend testing3" />
            <FaRegHandRock size={30} className="spinAscend testing3" />
          </div>
        </div>
      </div>
    </>
  );
}
