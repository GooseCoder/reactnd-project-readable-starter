import * as types from './ActionTypes';
import CommentsApi from '../api/CommentsApi';

export function loadCommentsSuccess(currentComments) {
    return {type: types.LOAD_COMMENTS_SUCCESS, currentComments};
}

export function loadAllCommentsSuccess(currentComments) {
    return {type: types.LOAD_ALL_COMMENTS_SUCCESS, currentComments};
}

export function voteCommentSuccess(comment) {
    return {type: types.VOTE_COMMENT_SUCCESS, comment};
}

export function deleteCommentSuccess(comment) {
    return {type: types.DELETE_COMMENT_SUCCESS, comment};
}

export function createCommentSuccess(comment) {
    return {type: types.CREATE_COMMENT_SUCCESS, comment};
}

export function loadCommentSuccess(comment) {
    return {type: types.LOAD_COMMENT_SUCCESS, comment};
}

export function editCommentSuccess(comment) {
    return {type: types.EDIT_COMMENT_SUCCESS, comment};
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

export function loadAllComments(postId) {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        const commentsApi = new CommentsApi()
        return commentsApi.getAllComments().then(comments => {
            dispatch(loadAllCommentsSuccess(comments));
        }).catch(error => {
            throw(error);
        });
    };
}

export function voteComment(id, vote) {
    return function(dispatch) {
        const commentsApi = new CommentsApi()
        return commentsApi.voteComment(id, vote).then(comment => {
            dispatch(voteCommentSuccess(comment));
        }).catch(error => {
            throw(error);
        });
    }
}

export function deleteComment(id) {
    return function(dispatch) {
        const commentsApi = new CommentsApi()
        return commentsApi.deleteComment(id).then(comment => {
            dispatch(deleteCommentSuccess(comment));
        }).catch(error => {
            throw(error);
        });
    }
}

export function createComment(comment) {
    return function(dispatch) {
        const commentsApi = new CommentsApi()
        return commentsApi.createComment(comment).then(comment => {
            dispatch(createCommentSuccess(comment));
        }).catch(error => {
            throw(error);
        });
    }
}

export function loadComment(id) {
    return function(dispatch) {
        const commentsApi = new CommentsApi()
        return commentsApi.loadComment(id).then(comment => {
            dispatch(loadCommentSuccess(comment));
        }).catch(error => {
            throw(error);
        });
    }
}

export function editComment(comment) {
    return function(dispatch) {
        const commentsApi = new CommentsApi()
        return commentsApi.editComment(comment).then(comment => {
            dispatch(editCommentSuccess(comment));
        }).catch(error => {
            throw(error);
        });
    }
}