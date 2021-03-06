import { ACTION_CREATE_POST, ACTION_DELETE_POST, ACTION_UPDATE_POST } from '../Action'

import { generateId } from '../Utility';
// A reducer is a function that accepts the current state and an action. 
// Then calculates and returns the next new version of state
export default function Post(state={}, action={type: ''}) {
    switch(action.type) {
        case ACTION_CREATE_POST:
            // create a post
            const id = generateId();
            console.log(`New ID is::`, id);
            // console.log('Did you mean to create post?')
            const newState = {
                ...state,
                // to use a variable as a key in an object literal,
                // wrap the variable in square brackets.
                [id]: action.payload
                // 1003: action.payload
            }
            // to get the equivalent result, you can use the familiar assignment syntax: 
            // newState[id] = action.payload;
            return newState;
        break;

        case ACTION_DELETE_POST:
            const deleteState = {
                ...state,
            };
            delete deleteState[action.payload.id];
            return deleteState;
        break;

        case ACTION_UPDATE_POST: 
            const updatePost = state[action.payload.id];
            if (updatePost) {
                return {
                    ...state,
                    [action.payload.id]: {
                        title: action.payload.title || updatePost.title,
                        content: action.payload.content || updatePost.content
                    }
                };
            } else {
                //  No post to update!
                return state;
            }
            break;

        default: 
            return state;
        break;
    }
}