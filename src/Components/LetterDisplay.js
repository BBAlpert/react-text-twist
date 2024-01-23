import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export default function LetterDisplay(props) {
  const myLetter = props.letter;
  const isHidden = props.isHidden;

  // temporarily making the hidden attribute a part of each individual letter
  /* const [myIsHidden, setMyIsHidden] = useState(isHidden);

  const clickLetter = () => {
    setMyIsHidden(!myIsHidden);
  };
*/
  return (
    <div
      className="LetterDisplay"
      style={{ backgroundColor: isHidden ? "lightgray" : "lightgreen" }}
    >
      <div style={{ display: isHidden ? "none" : "inherit" }}>{myLetter}</div>
    </div>
  );
}
