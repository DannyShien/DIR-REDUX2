import React from 'react';


function PokeList({visibilityFilter, cards, handleClick}) {

    const pokeCards = cards.map(card => {
        return (
            <li
                key={card.id}
                onClick={() => {
                    // to pass handleClick a custom argument, we must wrap it in an annyonmous function.
                    handleClick(card.id);
                }}
            >
                {card.name}
            </li>
        )
    })

    const caughtCards = cards.filter(card => {
        return card.isCaught === true
    })
    const caught = caughtCards.map(card => {
        return (
            <li
                key={card.id}
                onClick={() => {
                    handleClick(card.id);
                }}
            >
                {card.name}
            </li>
        )
    })

    const uncaughtCards = cards.filter(card => {
        return !card.isCaught === true
    })
    const uncaught = uncaughtCards.map(card => {
        return (
            <li
                key={card.id}
                onClick={() => {
                    handleClick(card.id);
                }}
            >
                {card.name}
            </li>
        )
    })

    return (
        <ul>
            {visibilityFilter === "all" ? pokeCards : visibilityFilter === "caught" ? caught : visibilityFilter === "uncaught" ? uncaught : null}
        </ul>
    )
}


export default PokeList;
