import React from "react";

function GuessTrackingComponent({ guessHistory, setGuessHistory }) {
  return (
    <>
    <div className="guess-results">
    {guessHistory.map(({id, guess}) => (
          <span className="guess" key={id}>{guess}</span>
        ))}
    </div>
    </>
  );
}

export default GuessTrackingComponent;
