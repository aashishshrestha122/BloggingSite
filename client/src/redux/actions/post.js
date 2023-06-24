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