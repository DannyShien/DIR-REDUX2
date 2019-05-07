import React from 'react';


function PokeList({cards}) {

    const cardItems = cards.map(card => {
        return (
            <li>{card.name}</li>
        )
    })

    return (
        <>
            {cardItems}
        </>
    )
}


export default PokeList;
