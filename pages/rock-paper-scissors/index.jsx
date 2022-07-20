import React, { useState } from "react";
import Layout from "../../Layout";

const RockPaperScissors = () => {
  const [comGuess, setComGuess] = useState("");
  const [userSelection, setUserSelection] = useState("");
  const [result, setResult] = useState("");

  const handleComputerGuess = () => {
    const index = Math.floor(Math.random() * 3);
    const Guess = ["Rock", "Paper", "Scissors"];
    setComGuess(Guess[index]);
  };

  const handleUserSelection = (value) => {
    setResult("");
    const index = Math.floor(Math.random() * 3);
    const Guess = ["Rock", "Paper", "Scissors"];
    setComGuess(Guess[index]);
    setUserSelection(value);

    if (userSelection === "Paper" && comGuess === "Paper") {
      setResult("Draw");
    }
  };

  return (
    <Layout>
      <div>
        <h2>Computer Guess: {comGuess} </h2>

        <button onClick={() => handleUserSelection("Rock")}>Rock</button>
        <button onClick={() => handleUserSelection("Paper")}>Paper</button>
        <button onClick={() => handleUserSelection("Scissors")}>
          Scissors
        </button>

        <p>User Chose: {userSelection}</p>
        <h4>Result: {result}</h4>
      </div>
    </Layout>
  );
};

export default RockPaperScissors;
