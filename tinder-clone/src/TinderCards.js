import React, { useState } from "react";
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards(){

    const [people,setPeople]=useState([
        {
            name:"Elon Musk",
            url:"https://th.bing.com/th/id/R.3b82ebc37407fd265e2b089dd7e1daed?rik=iYtb1qnXWTeZgw&pid=ImgRaw&r=0"
        },
        {
            name:"Jeff Bezos",
            url:"https://th.bing.com/th/id/R.ee721bcf3472debf0e709d2fb69f896b?rik=i8VY2x%2ffz5ylEg&pid=ImgRaw&r=0"
        }
    ])
    const swiped=(direction,nameToDelete)=>{
        console.log("removing"+nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame=(name)=>{
        console.log(name+"left the screen")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardsContainer">
            {people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}> 
                    <div style={{backgroundImage:`url(${person.url})`}}
                    className="card">
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}
export default TinderCards;