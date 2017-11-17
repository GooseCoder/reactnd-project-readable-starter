import * as types from '../actions/ActionTypes';
import initialState from '../InitialState';

export default function postsReducer(state = initialState.posts, action) {
    switch(action.type) {
        case types.LOAD_POSTS:
            // return Object.assign([], state, action.categories)
            return state;
        case types.LOAD_POSTS_SUCCESS:
            console.log(Object.assign([], state, action.posts))
            return action.posts
        default:
            return state;
    }
}
