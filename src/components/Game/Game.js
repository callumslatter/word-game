import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput/GuessInput";
import GuessTrackingComponent from "./GuessTrackingComponent/GuessTrackingComponent";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("ongoing");

  function onGuessSubmission(tentativeGuess) {
    if (guessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("You can only guess 6 times!");
      return;
    }
    const nextGuessHistory = [...guessHistory];
    nextGuessHistory.push(tentativeGuess);
    setGuessHistory(nextGuessHistory);
    if (tentativeGuess === answer) {
      setGameStatus("won")
    }
  }

  return (
    <>
      <GuessTrackingComponent guessHistory={guessHistory} answer={answer} />
      <GuessInput onGuessSubmission={onGuessSubmission} />
      {(gameStatus === "won" | "lost") ? (
        <GameOverBanner gameStatus={gameStatus} answer={answer} guessHistory={guessHistory}></GameOverBanner>
      ) : undefined}
    </>
  );
}

export default Game;
