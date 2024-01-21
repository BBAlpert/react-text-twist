import React from 'react';
import ReactDOM from 'react-dom/client';
import WordDisplay from './WordDisplay';

export default function AnswerDisplay(props) {
    const wordList = props.wordList;
    
    
    return (
        <div>
             <h3>Answer Display</h3>
        <div className='AnswerDisplay'>
            {wordList.map((word) => <WordDisplay word={word} isHidden={true} />)}

        </div>
        </div>
    );
}