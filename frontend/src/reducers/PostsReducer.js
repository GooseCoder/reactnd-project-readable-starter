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
            return Object.assign([], state, [action.post])
        case types.VOTE_POST_SUCCESS:
            const posts = state.map(post => {
                if (post.id === action.post.id) {
                    return action.post
                } else {
                    return post
                }
            })
            return posts
        default:
            return state;
    }
}
