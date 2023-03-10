import React from "react";

function GuessTrackingComponent({ guessHistory, setGuessHistory }) {
  return (
    <>
    <div className="guess-results">
    {guessHistory.map(({id, value}) => (
          <span className="guess" key={id}>{value}</span>
        ))}
    </div>
    </>
  );
}

export default GuessTrackingComponent;
