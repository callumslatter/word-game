import React from "react";

function GuessTrackingComponent({ guessHistory, setGuessHistory }) {
  return (
    <>
      <ul>
        {guessHistory.map(({id, guess}) => (
          <li key={id}>{guess}</li>
        ))}
      </ul>
    </>
  );
}

export default GuessTrackingComponent;
