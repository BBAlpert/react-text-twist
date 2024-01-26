import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import LetterDisplay from "./LetterDisplay";

export default function WordDisplay(props) {
  const myWord = props.word;
  const myLetters = [];
  const [myIsHidden, setMyIsHidden] = useState(props.isHidden);

  const clickWord = () => {
    setMyIsHidden(!myIsHidden);
  };
  for (const x of myWord) {
    myLetters.push(x);
    //console.log(myLetters);
  }
  const isHidden = props.isHidden;
  return (
    <div className="WordDisplay" onClick={clickWord}>
      {myLetters.map((letter) => (
        <LetterDisplay letter={letter} isHidden={myIsHidden} />
      ))}
    </div>
  );
}
