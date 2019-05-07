import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import { createStore, combineReducers} from 'redux';
// ===============================================================================
// ===== ===== STATE ===== =====
import initialCards from './Base.json'
// console.log(initialCards);

const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';
const initialState = {
    ...initialCards, 
    visibiiltyFilter: VISIBILITY_ALL
};

// the state is an object,with a cards property, which is an array of objects


// ===============================================================================
// ===== ===== ACTION + ACTION CREATORS ===== =====
const ACTION_CATCH = 'catch';

function catchCard (id)  {
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

function setVisibilityAll() {
    return {
        type: ACTION_VISIBILITY_ALL
    };
}

function setVisibilityCaught () {
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}

function setVisibilityUncaught () {
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
    console.log(`cards got called with :: ${action.payload}`);
    switch(action.type) {
        case ACTION_CATCH: 
            // find the card, set it to 'caught'
            const newState = state.map(card => {
                    if (card.id === action.payload.id) {
                        console.log('Found the card!')
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
        break;

        default: 
            return state;
        break;
    }
}

function visibility(state=initialState.visibiiltyFilter, action={type:''}) {
    switch(action.type) {
        case ACTION_VISIBILITY_ALL:
            return VISIBILITY_ALL;
        // break;
        case ACTION_VISIBILITY_CAUGHT: 
            return VISIBILITY_CAUGHT;
        // break; 
        case ACTION_VISIBILITY_UNCAUGHT: 
            return VISIBILITY_UNCAUGHT;
        // break;

        default: 
            return state;
        // break;
    }
}
//  this is where you are assigning responsibility of one piece of state and one reducer.
const rootReducer = combineReducers({
    cards: cards, 
    visibiiltyFilter: visibility
})

// ===============================================================================
// ===== ===== STORE ===== =====
const store = createStore(rootReducer);
window.store = store;






// ===============================================================================
// ===============================================================================
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
