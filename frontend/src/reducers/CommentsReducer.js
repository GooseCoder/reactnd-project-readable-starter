import * as types from '../actions/ActionTypes';
import initialState from '../components/InitialState';

export default function commentsReducer(state = initialState.currentComments, action) {
    switch(action.type) {
        case types.LOAD_COMMENTS_SUCCESS:
            return action.currentComments
        case types.EDIT_COMMENT_SUCCESS:
            return state.map(comment => {
                if (comment.id === action.comment.id) {
                    return action.comment
                } else {
                    return comment
                }
            })
        case types.VOTE_COMMENT_SUCCESS:
            return state.map(comment => {
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
