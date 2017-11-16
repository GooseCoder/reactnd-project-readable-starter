import {combineReducers} from 'redux';
import categories from './CategoriesReducer';
import posts from './PostsReducer';

const rootReducer = combineReducers({
    categories,
    posts
})

export default rootReducer;