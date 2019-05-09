import {
    combineReducers, 
    createStore
} from 'redux';

import Post from '../src/reducer/Post';

// Pass an object to combineReducers.
// Object should be shaped like your state.
const rootReducer = combineReducers({
    Post
});

const store = createStore(
    rootReducer,
); 


export default store;