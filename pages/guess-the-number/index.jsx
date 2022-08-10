import React, { useState } from "react";
import Layout from "../../Layout";

const index = () => {
  const [userGuess, setUserGuess] = useState(null);
  const [compGuess, setCompGuess] = useState(null);

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
          onChange={(e) => setUserGuess(e.target.value)}
          type="text"
          placeholder="Enter a number between 0 and 100"
        />
        <button type="submit">Submit</button>

        <h2>User Guess: {userGuess}</h2>
      </div>
    </Layout>
  );
};

export default index;
