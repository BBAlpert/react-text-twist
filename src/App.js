import logo from './logo.svg';
import './App.css';
import AnswerDisplay from './AnswerDisplay';
import AnswerInput from './AnswerInput';

function App() {

  const wordList = [
    'dog',
    'cat',
    'parrot',
    'turtle',
    'hamster'
];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Twist in React</h1>
        </header>
<div className='GameScreen'>
 
  <h2>Game Screen</h2>
  <AnswerDisplay wordList={wordList}/>
  <AnswerInput/>

  <div>
    <h3>Available Letters</h3>
  </div>
</div>

    </div>
  );
}

export default App;
