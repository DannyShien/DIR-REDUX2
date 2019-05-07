import React from 'react';


function PokeList({cards}) {

    const cardItems = cards.map(card => {
        return (
            <li>{cards.name}</li>
        )
    })

    return (
        <>
            {cardItems}
        </>
    )
}


export default PokeList;
