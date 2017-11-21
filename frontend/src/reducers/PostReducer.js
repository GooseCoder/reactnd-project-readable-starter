import * as types from '../actions/ActionTypes';
import initialState from '../components/InitialState';

export default function postReducer(state = initialState.currentPost, action) {
    switch(action.type) {
        case types.LOAD_POST_SUCCESS:
            return action.currentPost
        default:
            return state;
    }
}
