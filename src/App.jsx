import { Children, useEffect, useState } from "react";
import { FaRegHandScissors, FaRegHandRock, FaRegHandPaper } from "react-icons/fa";

function App() {
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [userChoice, setuserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState("");
  const [wannaPlay, setWannaPlay] = useState("");

  const choices = ["rock", "paper", "scissors"];

  function chooseIcon(choice) {
    if (choice == "rock") return <FaRegHandRock size={40} />;
    else if (choice == "paper") return <FaRegHandPaper size={40} />;
    else return <FaRegHandScissors size={40} />;
  }
  function clickHandler(e) {
    setuserChoice(e.target.innerText);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    setRound((prev) => prev + 1);
  }

  useEffect(() => {
    const result = userChoice + computerChoice;

    if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
      setUserPoints((prev) => prev + 1);
      userPoints == 1 ? setWinner("user") : "";
    } else if (result == "rockpaper" || result == "scissorsrock" || result == "paperscissors") {
      setComputerPoints((prev) => prev + 1);
      computerPoints == 1 ? setWinner("computer") : "";
    }
  }, [round]);

  return (
    <>
      <main>
        <h1>welcome to Rock Paper Scisorrs</h1>

        {/* Icons of the choices */}
        <div>
          <h1> user choice:</h1>
          <div>{chooseIcon(userChoice)}</div>
          {/* <img src={`../public/images/${userChoice}.jpg`} alt="paper"></img> */}
        </div>
        <div>
          <h1> computer choice:</h1>
          {chooseIcon(computerChoice)}
        </div>

        {/* Scorings */}
        <p> your points: {userPoints}</p>
        <p> computer points: {computerPoints}</p>

        {/* buttons to choose from, hidden when game ends*/}
        {winner.length == 0 && (
          <div className="flex gap-1">
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
          <div>
            <p>Congrats to {winner}!</p>
            {/* asking to play again */}
            {wannaPlay != "no" && (
              <div>
                <h1>do you wanna play again?</h1>
                <button className="button" onClick={() => window.location.reload()}>
                  yes
                </button>
                <button className="button" onClick={() => setWannaPlay("no")}>
                  no
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
