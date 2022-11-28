import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHandScissors, FaRegHandRock, FaRegHandPaper } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import "./welcoming.css";
import { Navbar } from "./Navbar";

export function Welcoming() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <div className="w-full h-screen text-white  bg-gradient-to-tr from-indigo-500 via-purple-500 to-black">
        {/* Navbar */}
        <Navbar setShowAbout={setShowAbout} />

        {/* Bouncing HI*/}
        <div className="absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[200px] text-black">
          <div className="animate-bounce">HI</div>
        </div>

        {/* Showing and hiding the about menu */}
        {showAbout && (
          <>
            <div className="absolute top-0 z-10 grid items-center justify-center w-screen h-screen bg-black/60 ">
              <div
                className={`bg-white text-black w-[300px] h-[400px] md:w-[600px] md:h-[800px] rounded-3xl relative translate-x-[-100%] slide-in duration-300 z-20`}>
                <ImCancelCircle
                  size={40}
                  className="absolute cursor-pointer top-4 right-4"
                  onClick={() => setShowAbout(false)}
                />
                <div className="flex flex-col items-center justify-center w-full h-full m-auto text-xs md:text-2xl lg:text-4xl">
                  <h1> This game is called </h1>
                  <b>ROCK PAPER SCISSORS</b>
                  <br />
                  <br />
                  <div className="mx-10 md:mx-15 lg:mx-20">
                    <h1> It is a classic game with 3 simple rules which are:</h1>
                    <ul className="ml-8 list-disc ">
                      <li> Rock beats Scissors</li>
                      <li> Scissors beat Paper</li>
                      <li> Paper beats rock (I also don't how that makes any sense 🤦‍♂️)</li>
                    </ul>
                  </div>
                  <br />
                  <br />
                  <h1> Developed & Designed by:</h1>
                  <a
                    className="p-2 mt-4 duration-200 border-2 border-black rounded-lg cursor-pointer hover:bg-black hover:text-white"
                    href="https://www.facebook.com/waseem.melhem.3?mibextid=LQQJ4d"
                    alt="Facebook Link">
                    Waseem Hashim Ibrahim
                  </a>
                </div>
              </div>
            </div>
            {/* About itself */}
          </>
        )}

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
          <div className="flex flex-col text-black text-6xl   justify-center items-center h-screen ">
            <div className="border-black border-4 p-8 rounded-2xl">
              <div>Choose Who You You'd Like To Play Against:</div>
              <div className="flex gap-8 justify-center py-8">
                <Link
                  className="cursor-pointer border-white border-2 p-4 rounded-full z-[2]"
                  to={"main"}>
                  Computer
                </Link>
                <Link
                  className="cursor-pointer border-white border-2 p-4 rounded-full z-[2]"
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
