import React from "react";
import Guess from "../../Guess/Guess";

import { range } from "../../../utils";

function GuessTrackingComponent({ guessHistory, setGuessHistory }) {
  const guessesAllowed = 6;
  const guessesAllowedArray = range(0, guessesAllowed);

  return (
    <>
      <div className="guess-results">
        {guessesAllowedArray.map(cell => {
          return <Guess></Guess>;
        })}

        {guessHistory.map(({ id, value }) => (
          <span className="guess" key={id}>
            {value}
          </span>
        ))}
      </div>
    </>
  );
}

export default GuessTrackingComponent;
