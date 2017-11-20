import * as types from './ActionTypes';
import CommentsApi from '../api/CommentsApi';

export function loadCommentsSuccess(currentComments) {
    return {type: types.LOAD_COMMENTS_SUCCESS, currentComments};
}

export function loadComments(postId) {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        const commentsApi = new CommentsApi()
        return commentsApi.getComments(postId).then(currentComments => {
            dispatch(loadCommentsSuccess(currentComments));
        }).catch(error => {
            throw(error);
        });
    };
}
