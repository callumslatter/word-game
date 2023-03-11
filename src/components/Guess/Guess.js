import React from "react";
import { range } from "../../utils";

function Guess() {
  const cellRange = range(0, 5);
  return (
    <p className="guess">
      {cellRange.map(cell => 
        (<span className="cell"></span>)
      )}  
    </p>
  );
}

export default Guess;
