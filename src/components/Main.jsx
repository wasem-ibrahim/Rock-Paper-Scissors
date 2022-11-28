import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { Navbar } from "./Navbar";

export function Main() {
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [userChoice, setuserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState("");

  const choices = ["rock", "paper", "scissors"];

  function clickHandler(e) {
    setuserChoice(e.target.innerText);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    setRound((prev) => prev + 1);
  }

  if (winner.length > 0) {
    confetti();
  }

  useEffect(() => {
    const result = userChoice + computerChoice;

    if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
      setUserPoints((prev) => prev + 1);
      userPoints == 2 ? setWinner("You") : "";
    } else if (result == "rockpaper" || result == "scissorsrock" || result == "paperscissors") {
      setComputerPoints((prev) => prev + 1);
      computerPoints == 2 ? setWinner("Computer") : "";
    }
  }, [round]);

  return (
    <>
      <div className="w-full h-screen text-white bg-gradient-to-tr from-indigo-500 via-purple-500 to-black">
        <Navbar />
        <br />
        <br />
        <main className="text-6xl">
          <div>
            <h1 className="flex justify-center py-4">
              Round {round}
              <br />
              <br />
            </h1>
            {/* Images and scoring Board */}
            <div className="flex items-start justify-center gap-20 text-2xl md:gap-40">
              <div className="flex flex-col items-center justify-center">
                <img
                  style={{ transform: "scaleX(-1)" }}
                  src={`../public/images/${userChoice}.png`}
                  alt=""
                />
                <p> You</p>
                <p> {userPoints}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={`../public/images/${computerChoice}.png`} alt="" />
                <p> Computer </p>
                <p> {computerPoints}</p>
              </div>
            </div>

            <br />
            <br />
            {/* buttons to choose from, hidden when game ends*/}
            {winner.length == 0 && (
              <div className="flex justify-center items-center gap-4 w-full text-sm md:w-[600px] md:gap-8 md:text-2xl lg:w-[800px] lg:text-4xl mx-auto">
                <button
                  className="w-full duration-300 button hover:text-white hover:bg-black"
                  onClick={clickHandler}>
                  rock
                </button>
                <button
                  className="w-full duration-300 button hover:text-white hover:bg-black"
                  onClick={clickHandler}>
                  paper
                </button>
                <button
                  className="w-full duration-300 button hover:text-white hover:bg-black"
                  onClick={clickHandler}>
                  scissors
                </button>
              </div>
            )}

            {/* Winner Pop-up Menu Screen */}
            {winner.length > 0 && (
              <div>
                <div className="absolute top-0 z-10 grid items-center justify-center w-screen h-screen bg-black/60 ">
                  <div className="bg-white text-black text-lg md:text-4xl lg:text-6xl w-[300px] h-[400px] md:w-[600px] md:h-[800px] rounded-3xl relative translate-x-[-100%] slide-in duration-300 z-20 flex flex-col justify-center items-center">
                    <h1>{winner} Won!</h1>
                    <br />
                    <div>
                      <h1 className="text-center">Do you wanna play again?</h1>
                    </div>
                    <br />
                    <div className="flex w-full gap-2">
                      <button
                        className="w-full  button duration-300 hover:text-white hover:bg-black"
                        onClick={() => window.location.reload()}>
                        yes
                      </button>
                      <Link
                        className="w-full p-2 text-center duration-300 border-4 border-black border-solid rounded-full hover:text-white hover:bg-black md:p-4 lg:p-8"
                        to={"/"}>
                        No
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
