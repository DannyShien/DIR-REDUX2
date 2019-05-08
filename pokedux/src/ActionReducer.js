import { combineReducers } from 'redux';

// ===============================================================================
// ===== ===== STATE ===== =====
import initialCards from './Base.json'
// console.log(initialCards);

const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';
const initialState = {
    ...initialCards, 
    visibilityFilter: VISIBILITY_ALL
};

// the state is an object,with a cards property, which is an array of objects


// ===============================================================================
// ===== ===== ACTION + ACTION CREATORS ===== =====
const ACTION_CATCH = 'catch';

export function catchCard (id)  {
    return {
        type: ACTION_CATCH,
        payload: {
            id
        }
    }
}
window.catchCard = catchCard;

const ACTION_VISIBILITY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;

export function setVisibilityAll() {
    return {
        type: ACTION_VISIBILITY_ALL
    };
}

export function setVisibilityCaught () {
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}

export function setVisibilityUncaught () {
    return {
        type: ACTION_VISIBILITY_UNCAUGHT
    };
}
window.setVisibilityAll = setVisibilityAll;
window.setVisibilityCaught = setVisibilityCaught;
window.setVisibilityUncaught = setVisibilityUncaught;


// ===============================================================================
// ===== ===== REDUCER ===== =====
// Deals with STATE and ACTION
// cards Reducer manages an array
function cards (state=initialState.cards, action={type: ''}) {
    console.log(`CARDS GOT CALLED WITH :: ${action.payload}`);
    switch(action.type) {
        case ACTION_CATCH: 
            // find the card, set it to 'caught'
            const newState = state.map(card => {
                    if (card.id === action.payload.id) {
                        console.log('FOUND THE CARD!')
                        return {
                            ...card, 
                            isCaught: true
                        }
                    } else {
                        return card;
                    }
                })
            ;
            // Whatever is returned by the reducer, is automatically used by the store as the new verion of state.
            return newState;
        // break;

        default: 
            return state;
        // break;
    }
}

function visibility(state=initialState.visibilityFilter, action={type: ''}) {
    switch(action.type) {
        case ACTION_VISIBILITY_ALL:
            return VISIBILITY_ALL;
        break;
        case ACTION_VISIBILITY_CAUGHT:
            return VISIBILITY_CAUGHT;
        break;
        case ACTION_VISIBILITY_UNCAUGHT:
            return VISIBILITY_UNCAUGHT;
        break;
        default:
            return state;
        break;
    }
}
//  this is where you are assigning responsibility of one piece of state and one reducer.
export const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
});