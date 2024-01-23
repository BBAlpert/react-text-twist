import React from 'react';
import ReactDOM from 'react-dom/client';
import LetterDisplay from './LetterDisplay';

export default function WordDisplay(props) {
    
    const myWord = props.word.toUpperCase();
    const myLetters = [];
    for (const x of myWord) {
        myLetters.push(x);
    }
    const isHidden = props.isHidden;
    return (
        <div className='WordDisplay'>
                        {myLetters.map((letter) => <LetterDisplay letter={letter} isHidden={isHidden} />)}
                                </div>
    );
}
