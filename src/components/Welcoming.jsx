import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHandScissors, FaRegHandRock, FaRegHandPaper } from "react-icons/fa";
import "./welcoming.css";
import { Navbar } from "./Navbar";

export function Welcoming() {
  return (
    <>
      <div className="w-full h-screen text-white bg-gradient-to-tr from-indigo-500 via-purple-500 to-black">
        {/* Navbar */}
        <Navbar />

        {/* Bouncing HI*/}
        <div className="absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[200px] text-black">
          <div className="animate-bounce">HI</div>
        </div>

        {/* Showing and hiding the about menu */}

        {/* Floating Icons */}
        <div>
          <div className="z-[-1]">
            <div className="flex justify-around absolute w-full bottom-[0]   z-[-1]">
              <FaRegHandRock size={30} className="spinAscend" />
              <FaRegHandScissors size={30} className="spinAscend" />
              <FaRegHandPaper size={30} className="spinAscend" />
              <FaRegHandRock size={30} className="spinAscend" />
              <FaRegHandPaper size={30} className="spinAscend" />
            </div>

            <div className="flex justify-around absolute w-full bottom-[0]  z-[2]">
              <FaRegHandRock size={30} className="spinAscend testing" />
              <FaRegHandPaper size={30} className="spinAscend testing" />
              <FaRegHandRock size={30} className="spinAscend testing" />
              <FaRegHandPaper size={30} className="spinAscend testing" />
            </div>

            <div className="flex justify-around absolute w-full bottom-[0]  z-[2]">
              <FaRegHandRock size={30} className="spinAscend testing2" />
              <FaRegHandPaper size={30} className="spinAscend testing2" />
              <FaRegHandRock size={30} className="spinAscend testing2" />
              <FaRegHandPaper size={30} className="spinAscend testing2" />
              <FaRegHandRock size={30} className="spinAscend testing2" />
            </div>

            <div className="flex justify-around absolute w-full bottom-[0]  z-[2]">
              <FaRegHandRock size={30} className="spinAscend testing3" />
              <FaRegHandPaper size={30} className="spinAscend testing3" />
              <FaRegHandPaper size={30} className="spinAscend testing3" />
              <FaRegHandRock size={30} className="spinAscend testing3" />
            </div>
          </div>

          {/* Choosing the opiton */}
          <div className="flex flex-col items-center justify-center h-screen text-xl text-black md:text-2xl lg:text-6xl ">
            <div className="border-black border-4 p-8 rounded-2xl max-w-[1200px]">
              <div className="text-center">Choose Who You You'd Like To Play Against:</div>
              <div className="flex justify-center gap-8 py-8">
                <Link
                  className="cursor-pointer border-white border-2 p-4 rounded-full z-[2] w-full text-center hover:text-white hover:bg-black hover:border-black duration-300"
                  to={"main"}>
                  Computer
                </Link>
                <Link
                  className="cursor-pointer border-white border-2 p-4 rounded-full z-[2] w-full text-center hover:text-white hover:bg-black hover:border-black duration-300"
                  to={"main"}>
                  Friend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
