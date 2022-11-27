import { Children, useEffect, useState } from "react";

function App() {
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [userChoice, setuserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");

  const choices = ["rock", "paper", "scissors"];
  function clickHandler(e) {
    setuserChoice(e.target.innerText);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
  }
  useEffect(() => {
    const result = userChoice + computerChoice;

    if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
      setUserPoints((prev) => prev + 1);
    }
  }, [userChoice]);

  return (
    <>
      <main>
        <h1>welcome to Rock Paper Scisorrs</h1>
        <p> your points: {userPoints}</p>
        <p> computer points: {computerPoints}</p>

        {/* Images of the choices */}
        <h1> user choice:</h1>
        <img src={`../public/images/${userChoice}.jpg`} alt="paper"></img>
        <h1> computer choice:</h1>
        <img
          src={`../public/images/${computerChoice}.jpg`}
          style={{ transform: "scaleX(-1)" }}
          alt="paper"
        ></img>

        {/* buttons to choose from */}
        <div className="flex gap-1">
          <button className="border-2 border-solid" onClick={clickHandler}>
            rock
          </button>
          <button onClick={clickHandler}> paper</button>
          <button onClick={clickHandler}> scissors</button>
        </div>
      </main>
    </>
  );
}

export default App;
