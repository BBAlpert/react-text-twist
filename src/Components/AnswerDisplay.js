import React from "react";
import ReactDOM from "react-dom/client";
import WordDisplay from "./WordDisplay";

export default function AnswerDisplay(props) {
  const wordList = props.wordList;
  //const hideWord = props.hideWord;
  //console.log(wordList["dog"]);
  return (
    <div>
      <h3>Answer Display</h3>
      <div className="AnswerDisplay">
        {wordList.map((word) => (
          <WordDisplay key={word.key} word={word.word} isHidden={word.hidden} />
        ))}
      </div>
    </div>
  );
}
