import React from 'react';
import ReactDOM from 'react-dom/client';


export default function LetterDisplay(props) {
    
    const myLetter = props.letter;
    const isHidden = props.isHidden;
    
    return (
        <div className='LetterDisplay'>
            <h4>{myLetter}</h4>
            
        </div>
    );
}