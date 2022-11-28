import React from "react";
import { useEffect, useState } from "react";
import { Images } from "./Images";

export function Main() {
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [userChoice, setuserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState("");
  const [wannaPlay, setWannaPlay] = useState("");

  const choices = ["rock", "paper", "scissors"];

  function clickHandler(e) {
    setuserChoice(e.target.innerText);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    setRound((prev) => prev + 1);
  }

  useEffect(() => {
    const result = userChoice + computerChoice;

    if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
      setUserPoints((prev) => prev + 1);
      userPoints == 2 ? setWinner("user") : "";
    } else if (result == "rockpaper" || result == "scissorsrock" || result == "paperscissors") {
      setComputerPoints((prev) => prev + 1);
      computerPoints == 2 ? setWinner("computer") : "";
    }
  }, [round]);

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen text-6xl bg-gray-200">
        <div className="">
          <h1 className="py-4">Round {round}</h1>

          {/* Icons of the choices */}
          <Images userChoice={userChoice} computerChoice={computerChoice} />

          {/* Scorings */}
          <div className="flex flex-col items-center">
            <p> your points: {userPoints}</p>
            <p> computer points: {computerPoints}</p>
          </div>

          {/* buttons to choose from, hidden when game ends*/}
          {winner.length == 0 && (
            <div className="flex justify-between">
              <button className="button" onClick={clickHandler}>
                rock
              </button>
              <button className="button" onClick={clickHandler}>
                paper
              </button>
              <button className="button" onClick={clickHandler}>
                scissors
              </button>
            </div>
          )}

          {/* winner screen */}
          {winner.length > 0 && (
            <div className="flex flex-col items-center justify-center">
              <p>Congrats to {winner}!</p>
              {/* asking to play again */}
              {wannaPlay != "no" && (
                <div>
                  <h1>do you wanna play again?</h1>
                  <div className="flex items-center justify-center">
                    <button className="mb-2 button" onClick={() => window.location.reload()}>
                      yes
                    </button>
                    <button className="button" onClick={() => setWannaPlay("no")}>
                      no
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
