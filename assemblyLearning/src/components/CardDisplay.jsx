import React from "react";
import { useState,useContext,createContext } from "react";
import FlashCard from "./FlashCard";
import { CardFlipContext } from "./CardFlipContext";
 
const CardDisplay=(props) => {

    const [nextCard, setNext]=useState(0);
    const [nextSet, goNext]=useState(false);
    const clickNext=() => goNext(false);

    let cards=[
        <FlashCard title="hello" description="Test" answer="Answer" flipped={nextSet}/>,
        <FlashCard title="Two" description="Tell Me" answer="Shown Answer"  flipped={nextSet}/>,
        <FlashCard title="Three" description="Tell Me" answer="Shown Answer" flipped={nextSet}/>,
        <FlashCard title="Four" description="Tell Me" answer="Shown Answer" flipped={nextSet}/>,
        <FlashCard title="Five" description="Tell Me" answer="Shown Answer" flipped={nextSet}/>
    ]
    let cardText=[
        { title:"Registers", description:"EAX Register", answer:"Accumlator Register", flipped:{nextSet}},
        { title:"Registers", description:"RDI Register", answer:"Arg 1 ",  flipped:{nextSet}},
        { title:"Registers", description:"RAX Register", answer:"Return Value Register", flipped:{nextSet}},
        { title:"Instructions", description:"mov a b", answer:"Copy value at b into a", flipped:{nextSet}},
        { title:"Instructions", description:"je", answer:"Jump when equal ", flipped:{nextSet}},
        { title:"Instructions", description:"cmp", answer:"Compare values", flipped:{nextSet}},
        { title:"Instructions", description:"jle", answer:"jump to address when less than or equal", flipped:{nextSet}}
    ]

    const[ myCard,setMyCard]=useState(<FlashCard title={cardText[0].title} description={cardText[0].description} answer={cardText[0].answer} flipped={false} />)
    
    const runSetNext=() =>{
        
        const randomIndex=Math.floor(Math.random()*cardText.length);
        console.log(randomIndex)
        goNext(false);
        setNext(randomIndex);
        setMyCard(<FlashCard title={cardText[randomIndex].title} description={cardText[randomIndex].description} answer={cardText[randomIndex].answer} flipped={false} />)
    }
    return (
        <div>
            <h2>Cards in deck: {cardText.length}</h2>
            {myCard}
            <br></br>
            <div>
                <button onClick={runSetNext}>Next Card</button>
            </div>
        </div>
    
    )
}

export default CardDisplay;