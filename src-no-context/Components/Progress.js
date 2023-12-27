import React from "react";

function Progress({ numQuestions, index, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} / {maxPossiblePoints} Points
      </p>
    </header>
  );
}

export default Progress;
