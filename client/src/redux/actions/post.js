import { createAction } from 'redux-actions';

import * as postService from '../../services/post';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_PENDING = 'CREATE_POST_PENDING';
export const CREATE_POST_REJECTED = 'CREATE_POST_REJECTED';
export const CREATE_POST_FULFILLED = 'CREATE_POST_FULFILLED';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_POSTS_PENDING = 'GET_ALL_POSTS_PENDING';
export const GET_ALL_POSTS_REJECTED = 'GET_ALL_POSTS_REJECTED';
export const GET_ALL_POSTS_FULFILLED = 'GET_ALL_POSTS_FULFILLED';

export const EDIT_POST = 'EDIT_POST';
export const EDIT_POST_PENDING = 'EDIT_POST_PENDING';
export const EDIT_POST_REJECTED = 'EDIT_POST_REJECTED';
export const EDIT_POST_FULFILLED = 'EDIT_POST_FULFILLED';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_PENDING = 'DELETE_POST_PENDING';
export const DELETE_POST_REJECTED = 'DELETE_POST_REJECTED';
export const DELETE_POST_FULFILLED = 'DELETE_POST_FULFILLED';

export const SEARCH_POST = 'SEARCH_POST';
export const SEARCH_POST_PENDING = 'SEARCH_POST_PENDING';
export const SEARCH_POST_REJECTED = 'SEARCH_POST_REJECTED';
export const SEARCH_POST_FULFILLED = 'SEARCH_POST_FULFILLED';

export const post = createAction(
    CREATE_POST,
    postService.post
);

export const getAllPosts = createAction(
    GET_ALL_POSTS,
    postService.getAllPosts
)

export const editPost = createAction(
    EDIT_POST,
    postService.editPost
);

export const deletePost = createAction(
    DELETE_POST,
    postService.deletePost
);

export const searchPost = createAction(
    SEARCH_POST,
    postService.searchPost
);