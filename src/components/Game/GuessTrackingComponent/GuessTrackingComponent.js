import React from "react";
import Guess from "../../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";

import { range } from "../../../utils";

function GuessTrackingComponent({guessHistory, answer}) {
  return (
    <>
      <div className="guess-results">
        <div>
          {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
            <Guess className="guess" key={num} value={guessHistory[num]} answer={answer}></Guess>
          ))}
        </div>
      </div>
    </>
  );
}

export default GuessTrackingComponent;
