import { createAction } from 'redux-actions';

import * as commentService from '../../services/comment';

export const COMMENT = 'COMMENT';
export const COMMENT_PENDING = 'COMMENT_PENDING';
export const COMMENT_REJECTED = 'COMMENT_REJECTED';
export const COMMENT_FULFILLED = 'COMMENT_FULFILLED';


export const postComment = createAction(
    COMMENT,
    commentService.postComment
);
