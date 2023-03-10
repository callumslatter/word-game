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
  const [guessHistory, setGuessHistory] = React.useState([]);

  function onGuessSubmission(tentativeGuess) {
    const nextGuessHistory = [...guessHistory];
    nextGuessHistory.push({
      id: crypto.randomUUID(),
      value: tentativeGuess,
    });
    setGuessHistory(nextGuessHistory);
  }

  return (
    <>
      <GuessTrackingComponent
        guessHistory={guessHistory}
        setGuessHistory={setGuessHistory}
      />

      <GuessInput onGuessSubmission={onGuessSubmission} />
    </>
  );
}

export default Game;
