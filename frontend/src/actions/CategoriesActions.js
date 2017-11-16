import * as types from './ActionTypes';
import CategoriesApi from '../api/CategoryApi';

export function loadCategoriesSuccess(categories) {
    return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        const categoriesApi = new CategoriesApi()
        return categoriesApi.getCategories().then(categories => {
            dispatch(loadCategoriesSuccess(categories));
        }).catch(error => {
            throw(error);
        });
    };
}
