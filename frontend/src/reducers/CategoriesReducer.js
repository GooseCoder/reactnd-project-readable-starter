import * as types from '../actions/ActionTypes';
import initialState from '../components/InitialState';

export default function categoriesReducer(state = initialState.categories, action) {
    switch(action.type) {
        case types.LOAD_CATEGORIES:
            // return Object.assign([], state, action.categories)
            return state;
        case types.LOAD_CATEGORIES_SUCCESS:
            return state.concat(action.categories)
        default:
            return state;
    }
}
