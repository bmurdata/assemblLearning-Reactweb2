import React from "react";
import { useState } from "react";

const FlashCard=(props) => {
    const [flip, setFlip]=useState(false);
    const flipCard=() => setFlip(!flip);
    let CardCSS;
    
    let cardText;
    if (flip==false) {
            CardCSS='FlashCard-Question'
            cardText=<p>{props.description}</p>
        } else {
            CardCSS='FlashCard-Answer'
           cardText= <p>{props.answer}</p>
        }
    return (
    <div className={CardCSS} onClick={flipCard}>
        <br></br>
        <h3>{props.title}</h3>
        {cardText}
        <br></br>
    </div>)
}

export default FlashCard;