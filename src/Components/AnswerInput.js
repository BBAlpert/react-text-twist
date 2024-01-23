import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export default function AnswerInput(props) {
  const wordList = props.wordList;
  const availableLetters = ["A", "B", "C", "D", "E"];
  const [guessedWord, setGuessedWord] = useState("");
  //const guessedWord = "";
  function guessLetter(letter) {
    setGuessedWord((guessedWord) => guessedWord + letter);
    //console.log(letter);
  }

  return (
    <div className="AnswerInput">
      <h3>Answer Input</h3>
      <div className="guessedWord"> {guessedWord}</div>
      <h3>Available Letters</h3>
      <div className="AvailableLetters">
        {availableLetters.map((letter) => (
          <div className="answerLetter" onClick={() => guessLetter(letter)}>
            {letter}
          </div> // <WordDisplay word={word.word} isHidden={word.hidden} />
        ))}
      </div>
    </div>
  );
}
