// Action types
export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';

// Action creators
export function createPost(payload) {
    // assumes that the `payload` argument looks like this:
    // {
    //  title: 'lorem ipsum',
    //  content: 'dolor oakley set',
    // }

    return {
        type: ACTION_CREATE_POST,
        payload
    };
}
// setup (window.) to use in console
window.createPost = createPost;


export function updatePost(id, payload) {
    return {
        type: ACTION_UPDATE_POST, 
        payload: {
            id, 
            ...payload
        }
    };
}
window.updatePost = updatePost;

export function deletePost(id) {
    return {
        type: ACTION_DELETE_POST, 
        payload: {
            id
        }
    };
}
window.deletePost = deletePost;