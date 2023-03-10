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
  const [guessHistory, setGuessHistory] = React.useState(["This is the first guess"])

  function onGuessSubmission() {
    const nextGuessHistory = [...guessHistory]
    nextGuessHistory.push(guess)
    setGuessHistory(nextGuessHistory)
  }

  return (
    <>
      <GuessInput guess={guess} setGuess={setGuess} onGuessSubmission={() => onGuessSubmission()} />
      <GuessTrackingComponent guessHistory={guessHistory} setGuessHistory={setGuessHistory}/>
    </>
  );
}

export default Game;
