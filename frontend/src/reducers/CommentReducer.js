import * as types from '../actions/ActionTypes';
import initialState from '../components/InitialState';

export default function postsReducer(state = initialState.currentComment, action) {
    switch(action.type) {
        case types.LOAD_COMMENT_SUCCESS:
            return action.comment
        default:
            return state;
    }
}
