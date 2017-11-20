import * as types from '../actions/ActionTypes';
import initialState from '../InitialState';

export default function postsReducer(state = initialState.currentPost, action) {
    switch(action.type) {
        case types.LOAD_POST_SUCCESS:
            console.log(Object.assign([], state, action.currentPost))
            return action.currentPost

        default:
            return state;
    }
}
