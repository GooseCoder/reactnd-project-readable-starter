import {combineReducers} from 'redux';
import categories from './CategoriesReducer';
import posts from './PostsReducer';
import currentPost from './PostReducer';
import currentComments from './CommentsReducer';

const rootReducer = combineReducers({
    categories,
    posts,
    currentPost,
    currentComments
})

export default rootReducer;