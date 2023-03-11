import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  if (value) {
    const checkedGuess = checkGuess(value, answer)
    {return (
      <p className="guess">
        {checkedGuess.map(({letter, status }) => (
          <span className={`cell ${status}`}>
            {letter}
          </span>
        ))}
      </p>
    );}
  }
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
