import React from "react";
import ReactDOM from "react-dom/client";

export default function AnswerInput(props) {
  const wordList = props.wordList;
  const availableLetters = ["A", "b", "c", "d", "e"];
  return (
    <div className="AnswerInput">
      <h3>Answer Input</h3>
      <p>this is the answer input box woooo</p>
      <div className="AvailableLetters">
        {availableLetters.map((letter) => (
          <div className="answerLetter">{letter}</div> // <WordDisplay word={word.word} isHidden={word.hidden} />
        ))}
      </div>
    </div>
  );
}
