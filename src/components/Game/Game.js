import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput/GuessInput";
import GuessTrackingComponent from "./GuessTrackingComponent/GuessTrackingComponent";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessHistory, setGuessHistory] = React.useState([]);

  function onGuessSubmission() {
    const nextGuessHistory = [...guessHistory];
    nextGuessHistory.push({
      id: crypto.randomUUID(),
      guess: guess,
    });
    console.log(nextGuessHistory)
    setGuessHistory(nextGuessHistory);
  }

  return (
    <>
      <GuessTrackingComponent
        guessHistory={guessHistory}
        setGuessHistory={setGuessHistory}
      />

      <GuessInput
        guess={guess}
        setGuess={setGuess}
        onGuessSubmission={() => onGuessSubmission()}
      />
    </>
  );
}

export default Game;
