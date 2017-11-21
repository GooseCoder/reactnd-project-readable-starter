import * as types from '../actions/ActionTypes';
import initialState from '../InitialState';

export default function postsReducer(state = initialState.currentComments, action) {
    switch(action.type) {
        case types.LOAD_COMMENTS_SUCCESS:
            return action.currentComments
        case types.VOTE_COMMENT_SUCCESS:
            return state.map(comment => {
                console.log('action', action)
                if (comment.id === action.comment.id) {
                    return action.comment
                } else {
                    return comment
                }
            })
        case types.DELETE_COMMENT_SUCCESS:
            return state.filter(comment => action.comment.id !== comment.id)
        case types.CREATE_COMMENT_SUCCESS:
            return state.concat(action.comment)
        default:
            return state;
    }
}
