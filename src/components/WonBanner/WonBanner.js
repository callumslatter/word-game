import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({numOfGuesses}) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> You got it in{" "}
        <strong>
          {numOfGuesses > 1
            ? `${numOfGuesses} guesses`
            : `${numOfGuesses} guess`}
          !
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
