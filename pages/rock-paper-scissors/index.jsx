import React, { useState, useEffect } from "react";
import Layout from "../../Layout";

const RockPaperScissors = () => {
  const [comGuess, setComGuess] = useState("");
  const [userSelection, setUserSelection] = useState("");
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const [drawCount, setDrawCount] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const Guess = ["Rock", "Paper", "Scissors"];

  // useEffect(() => {
  //   handleComputerGuess();
  // }, []);

  // useEffect(() => {
  //   handleComputerGuess;
  // }, [count]);

  const handleComputerGuess = () => {
    const index = Math.floor(Math.random() * 3);
    // const Guess = ["Rock", "Paper", "Scissors"];
    setComGuess(Guess[index]);
  };

  // const gameLogic = () => {

  // }

  const handleUserSelection = (value) => {
    setCount((prevCount) => prevCount + 1);
    handleComputerGuess();
    setUserSelection(value);

    //TODO: Logic for user selection. Rock beats scissors, Paper beats rock and Scissors beats paper

    if (
      (userSelection === "Paper" && comGuess === "Rock") ||
      (userSelection === "Scissors" && comGuess === "Paper") ||
      (userSelection === "Rock" && comGuess === "Scissors")
    ) {
      setResult("You win");
      setUserScore((prevScore) => prevScore + 1);
    }
    if (
      (userSelection === "Rock" && comGuess === "Paper") ||
      (userSelection === "Paper" && comGuess === "Scissors") ||
      (userSelection === "Scissors" && comGuess === "Rock")
    ) {
      setResult("You lose");
      setCompScore((prevScore) => prevScore + 1);
    }
    if (
      (userSelection === "Paper" && comGuess === "Paper") ||
      (userSelection === "Scissors" && comGuess === "Scissors") ||
      (userSelection === "Rock" && comGuess === "Rock")
    ) {
      setResult("Draw");
      setDrawCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <Layout>
      <div>
        <h2>Computer Guess: {comGuess} </h2>
        <h4>You have played: {count} times </h4>

        <p>
          Your Score {userScore} : {compScore} ComputerScore
        </p>

        <p>You've Drawn {drawCount} times</p>

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
