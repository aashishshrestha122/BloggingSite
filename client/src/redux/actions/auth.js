import { createAction } from 'redux-actions';

import * as userService from '../../services/user';

export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_REJECTED = 'LOGOUT_REJECTED';
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_REJECTED = 'SIGNUP_REJECTED';
export const SIGNUP_FULFILLED = 'SIGNUP_FULFILLED';

export const login = createAction(
    LOGIN,
    userService.login
);

export const logout = createAction(
    LOGOUT,
    userService.logout
);

export const signup = createAction(
    SIGNUP,
    userService.signup
)