import logo from "./logo.svg";
import "./App.css";
import AnswerDisplay from "./Components/AnswerDisplay";
import AnswerInput from "./Components/AnswerInput";
import { useState } from "react";

function App() {

  // Initialize the collection of words as a straightforward array
  const wordArray = [
    "dog",
    "cat",
    "parrot",
    "turtle",
    "hamster",
    "turkey",
    "fish",
    "tortoise",
    "armadillo",
    "leopard",
  ];

  // Turn the array of words into a map of objects with keys, the words themselves, and whether they are hidden
  
  const wordMap = wordArray.map((myWord) => {
    myWord = myWord.toUpperCase();
return {key:myWord, word: myWord, hidden: true};
  });

  wordMap.forEach(myFunction);

  function myFunction(value, index, array) {
    console.log(value);
    console.log(value.word);
  }

  // Initialize the State-ed wordList with the objects in wordMap
const [wordList, setWordList] = useState(wordMap);

  /*const wordList = [
    { key: "dog", word: "dog", hidden: true },
    { key: "turtle", word: "turtle", hidden: false },
    { key: "leopard", word: "leopard", hidden: true },
    { key: "fish", word: "fish", hidden: true },
    { key: "hamster", word: "hamster", hidden: false },
    { key: "bird", word: "bird", hidden: true },
    { key: "cat", word: "cat", hidden: true },
  ];*/
  

// Make a new array of letters
  const [letterList, setLetterList] = useState([]);


  const hideWord = (word) => {
    word.hidden = !word.hidden;
    //console.log("test");
  };

  // How to add letters to the letterList, checking for duplicates first
function addLetter(myLetter) {
  if (!letterList.includes(myLetter)) {
const newLetters = letterList;
newLetters.push(myLetter);
setLetterList(newLetters);
  }
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Twist in React</h1>
      </header>
      <div className="GameScreen">
        <h2>Game Screen</h2>
        <p>Click on the boxes to reveal/hide the letters.</p>
        <AnswerDisplay wordList={wordList} />
        <AnswerInput wordList={wordList} letterList = {letterList}/>
        {/* why am i separating input and display like this? */}
      </div>
    </div>
  );
}

export default App;
