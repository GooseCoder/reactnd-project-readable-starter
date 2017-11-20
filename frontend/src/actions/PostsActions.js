import * as types from './ActionTypes';
import PostsApi from '../api/PostsApi';

export function loadPostsSuccess(posts) {
    return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function loadPostSuccess(currentPost) {
    return {type: types.LOAD_POST_SUCCESS, currentPost};
}

export function loadPost(postId) {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        const postsApi = new PostsApi()
        return postsApi.getPost(postId).then(currentPost => {
            dispatch(loadPostSuccess(currentPost));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadAllPosts() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        const postsApi = new PostsApi()
        return postsApi.getAllPosts().then(posts => {
            dispatch(loadPostsSuccess(posts));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadPostsByCategory(category) {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        const postsApi = new PostsApi()
        return postsApi.getPostsByCategory(category).then(posts => {
            dispatch(loadPostsSuccess(posts));
        }).catch(error => {
            throw(error);
        });
    };
}
