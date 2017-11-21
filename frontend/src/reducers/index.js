import {combineReducers} from 'redux';
import categories from './CategoriesReducer';
import posts from './PostsReducer';
import currentPost from './PostReducer';
import currentComment from './CommentReducer';
import currentComments from './CommentsReducer';

const rootReducer = combineReducers({
    categories,
    posts,
    currentPost,
    currentComment,
    currentComments,
})

export default rootReducer;