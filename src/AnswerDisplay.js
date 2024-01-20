import React from 'react';
import ReactDOM from 'react-dom/client';
import WordDisplay from './WordDisplay';

export default function AnswerDisplay(props) {
    const wordList = props.wordList;
    
    
    return (
        <div className='AnswerDisplay'>
            <h3>Answer Display</h3>
            <p>this is the answer display box woooo</p>
            <WordDisplay word="butt" isHidden={false}/>
            {wordList.map((word) => <WordDisplay word={word} isHidden={false} />)}

        </div>
    );
}