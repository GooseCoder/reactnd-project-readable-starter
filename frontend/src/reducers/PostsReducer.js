import * as types from '../actions/ActionTypes';
import initialState from '../InitialState';

export default function postsReducer(state = initialState.posts, action) {
    switch(action.type) {
        case types.LOAD_POSTS:
            // return Object.assign([], state, action.categories)
            return state;
        case types.LOAD_POSTS_SUCCESS:
            return action.posts
        case types.CREATE_POST_SUCCESS:
            return state.concat(action.post)
        case types.VOTE_POST_SUCCESS:
            return state.map(post => {
                if (post.id === action.post.id) {
                    return action.post
                } else {
                    return post
                }
            })
        case types.DELETE_POST_SUCCESS:
            return state.filter(post => action.post.id !== post.id)
        default:
            return state;
    }
}
