import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

export function Navbar() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
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
              {/* About itself */}
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
        </>
      )}
    </>
  );
}
