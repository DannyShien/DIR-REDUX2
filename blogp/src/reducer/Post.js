import { ACTION_CREATE_POST } from '../actions'

// A reducer is a function that accepts the current state and an action. 
// Then calculates and returns the next new version of state
export default function Post(state={}, actions={type: ''}) {
    switch(actions.type) {
        case ACTION_CREATE_POST:
        // create a post
        break;
        default: 
            return state;
        break;
    }
}