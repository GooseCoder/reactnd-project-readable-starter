import {combineReducers} from 'redux';
import categories from './CategoriesReducer';

const rootReducer = combineReducers({
    categories,
})

export default rootReducer;