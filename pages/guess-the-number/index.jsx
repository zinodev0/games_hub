import React, { useState, useEffect } from "react";
import Layout from "../../Layout";

const index = () => {
  const [userGuess, setUserGuess] = useState(null);
  const [compGuess, setCompGuess] = useState(null);
  const [hint, setHint] = useState("");

  useEffect(() => {
    setCompGuess(Math.floor(Math.random() * 99) + 1);
  }, []);

  const gamePlay = () => {
    if (userGuess > compGuess) {
      setHint("Go Lower");
    } else if (userGuess < compGuess) {
      setHint("Go Higher");
    } else if (userGuess === compGuess) {
      setHint(`CONGRATULATIONS THE ANSWER WAS ${compGuess}`);
    } else return;
  };
  return (
    <Layout>
      <div>
        <h4>Welcome to Guess the number game</h4>
        <h5>
          {" "}
          I would think of a number between 0 and 100 and you have to try to
          guess it in 5 guesses, I would let you know if you should guess lower
          or higher
        </h5>

        <input
          value={userGuess}
          onChange={(e) => setUserGuess(Number(e.target.value))}
          type="number"
          placeholder="Enter a number between 0 and 100"
        />
        <button type="submit" onClick={gamePlay}>
          Submit
        </button>

        {userGuess !== null && (
          <h3 style={{ color: "blue" }}>
            {" "}
            You guessed {userGuess}, {userGuess !== compGuess && hint}{" "}
          </h3>
        )}
        {userGuess !== null && (userGuess > 99 || userGuess < 1) && (
          <p style={{ color: "red" }}>
            Number must be greater than 0 and less than 100
          </p>
        )}

        <h2>User Guess: {userGuess}</h2>
        <h2>User Guess Type: {typeof userGuess}</h2>
        <h2>Comp Guess: {compGuess}</h2>
      </div>
    </Layout>
  );
};

export default index;
