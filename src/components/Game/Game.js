import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput/GuessInput";
import GuessTrackingComponent from "./GuessTrackingComponent/GuessTrackingComponent";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("ongoing");

  function onGuessSubmission(tentativeGuess) {

    // Add guess to list 
    const nextGuessHistory = [...guessHistory, tentativeGuess];
    setGuessHistory(nextGuessHistory);

    // If game won
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    }

    // If game lost
    if (nextGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessTrackingComponent guessHistory={guessHistory} answer={answer} />
      <GuessInput
        onGuessSubmission={onGuessSubmission}
        gameStatus={gameStatus}
      />

      {/* End of game banners */}
      
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={guessHistory.length}/>
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer}/>
      )}
    </>
  );
}

export default Game;
