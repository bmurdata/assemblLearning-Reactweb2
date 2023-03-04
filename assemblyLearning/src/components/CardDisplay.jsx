import React from "react";
import { useState } from "react";
import FlashCard from "./FlashCard";

 
const CardDisplay=(props) => {
    const [nextCard, setNext]=useState(false);
    
    let CardCSS;
    let cards=[
        <FlashCard title="hello" description="Test" answer="Answer"/>,
        <FlashCard title="Two" description="Tell Me" answer="Shown Answer"/>,
        <FlashCard title="Three" description="Tell Me" answer="Shown Answer"/>,
        <FlashCard title="Four" description="Tell Me" answer="Shown Answer"/>,
        <FlashCard title="Five" description="Tell Me" answer="Shown Answer"/>
    ]
    let selectedCard=cards[0]
    function pickNext(){ 
        console.log("Hello")
        selectedCard=cards[Math.floor(Math.random()*cards.length)];
        return selectedCard;
        console.log(selectedCard)
    }
    return (
        <div>
            {selectedCard}
            <br></br>
            <div>
                <button onClick={selectCard=pickNext()}>Next Card</button>
            </div>
        </div>
    
    )
}

export default CardDisplay;