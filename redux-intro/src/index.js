import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




//  STATE
//  - is always an object (key:value pairs)
//  - is never mutated directly
const initialState = {
    value: 1
};

// ACTIONS
// always have type
// sometimes havea a payload

// 'increment' or 'decrement'
const ACTION_INCREMENT = 'increment'
const ACTION_DECREMENT = 'decrement'

// it is common practice to have action creator function
function incrememnt() {
    type: ACTION_INCREMEMT
}
function decrement() {
    type: ACTION_DECREMEMTN
}
window.increment = increment;
window.decrement = decrement;


// A REDUCER
// - is always a function 
// - arg1: the current state
// - arg2: an action
// - optional: usually named for the data
function counter(state=initialState, action={type:''}) {
    // inspect the action and see what type it is
    switch(action.type) {
        // if (action.type === ACTION_INCREMENT) {
        case ACTION_INCREMENT:
        //  do some stuff
            return {
                // ...state, // if our state were more complex, we would use the spread operator
                value: state.value + 1
            }
        break;
        // }else if (action.type === ACTION_DECREMENT) {
        case ACTION_DECREMENT: 
            return {
                value: state.value - 1
            };
        break;
        // } else {
        default: 
            return state; 
        break;
        // }
    }
}
window.counter = counter;

// THE STORE
const store = createStore(counting);
window.store = store;