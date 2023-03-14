import React from "react";
import { useState } from "react";

const chosenFlashCard=(props) => {
    console.log('Loaded in: '+props.title)
    const [flip, setFlip]=useState(props.flipped);
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
        
    <div >
        <div className={CardCSS} onClick={flipCard}>
            <br></br>
            <h3>{props.title}</h3>
            {cardText}
            <br></br>
        </div>
        <input
            type="text"
            name={props.label}
            value={props.currentVal}
            placeholder="Guess the answer..."
            onChange={props.handleChange}
            className = "textbox"
        />
    </div>
    
    )
}

export default chosenFlashCard;