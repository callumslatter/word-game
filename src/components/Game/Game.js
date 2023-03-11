import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput/GuessInput";
import GuessTrackingComponent from "./GuessTrackingComponent/GuessTrackingComponent";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

  function onGuessSubmission(tentativeGuess) {
    if (guessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("You can only guess 6 times!");
      return;
    }
    const nextGuessHistory = [...guessHistory];
    nextGuessHistory.push(tentativeGuess);
    setGuessHistory(nextGuessHistory);
  }

  return (
    <>
      <GuessTrackingComponent guessHistory={guessHistory} answer={answer} />
      <GuessInput onGuessSubmission={onGuessSubmission} />
    </>
  );
}

export default Game;
