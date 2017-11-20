import * as types from '../actions/ActionTypes';
import initialState from '../InitialState';

export default function postsReducer(state = initialState.posts, action) {
    switch(action.type) {
        case types.LOAD_POSTS:
            // return Object.assign([], state, action.categories)
            return state;
        case types.LOAD_POSTS_SUCCESS:
            return action.posts
        case types.ADD_POST_SUCCESS:
            return Object.assign([], state, action.post)
        default:
            return state;
    }
}
