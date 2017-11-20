import * as types from '../actions/ActionTypes';
import initialState from '../InitialState';

export default function postsReducer(state = initialState.currentComments, action) {
    switch(action.type) {
        case types.LOAD_COMMENTS_SUCCESS:
            return action.currentComments
        default:
            return state;
    }
}
