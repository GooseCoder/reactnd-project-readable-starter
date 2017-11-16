import * as types from '../actions/ActionTypes';
import initialState from '../InitialState';

export default function postsReducer(state = initialState.posts, action) {
    switch(action.type) {
        case types.LOAD_POSTS:
            // return Object.assign([], state, action.categories)
            return state;
        case types.LOAD_POSTS_SUCCESS:
            return Object.assign([], state, action.posts)
        default:
            return state;
    }
}
