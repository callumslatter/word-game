import React from "react";

// Improvements
// - Improve guess length validation

function GuessInput({ onGuessSubmission, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onGuessSubmission(tentativeGuess);
    setTentativeGuess("");
  }

  const inputStatus = (gameStatus === "ongoing" ? false : true)

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={inputStatus}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        maxLength={"5"}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const nextTentativeGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextTentativeGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
