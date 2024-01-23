import logo from "./logo.svg";
import "./App.css";
import AnswerDisplay from "./Components/AnswerDisplay";
import AnswerInput from "./Components/AnswerInput";

function App() {
  /*const wordList = [
    //make these objects
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
  ];*/
  const wordList = [
    { word: "dog", hidden: true },
    { word: "turtle", hidden: false },
    { word: "leopard", hidden: true },
    { word: "fish", hidden: true },
    { word: "hamster", hidden: false },
    { word: "bird", hidden: true },
    { word: "cat", hidden: true },
  ];

  const hideWord = (word) => {
    //word.hidden = !word.hidden;
    console.log("test");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Twist in React</h1>
      </header>
      <div className="GameScreen">
        <h2>Game Screen</h2>
        <p>Click on the boxes to reveal/hide the letters.</p>
        <AnswerDisplay wordList={wordList} />
        <AnswerInput wordList={wordList} />
        {/* why am i separating input and display like this? */}
        <div>
          <h3>Available Letters</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
