import React from "react";

function GameOverBanner({ gameStatus, answer, guessHistory }) {
  const className = `${gameStatus == "won" ? "happy" : "sad"} banner`;
  const numOfGuesses = guessHistory.length;

  function createBannerContent(gameStatus) {
    if (gameStatus == "won") {

      // Creates '1 guess' vs 'x guesses' strings
      const guessesString =
        numOfGuesses > 1 ? `${numOfGuesses} guesses` : `${numOfGuesses} guess`;
      return (
        <>
          <strong>Congratulations!</strong> You got it in {guessesString}!
        </>
      );
    } else if (gameStatus == "lost") {
      return (
        <>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </>
      );
    }
  }

  const bannerContent = createBannerContent(gameStatus);

  return (
    <div className={className}>
      <p>{bannerContent}</p>
    </div>
  );
}

export default GameOverBanner;
