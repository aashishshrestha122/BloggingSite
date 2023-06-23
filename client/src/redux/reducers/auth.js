import {
    LOGIN_PENDING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    LOGOUT_PENDING,
    LOGOUT_FULFILLED,
    LOGOUT_REJECTED,
} from "../actions/auth";
import * as tokenUtil from "../../utils/token";

const initialState = {
    user : {},
    isAuthenticated: false,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_FULFILLED:
            tokenUtil.setAccessToken(action?.payload?.accessToken);
            tokenUtil.setRefreshToken(action?.payload?.refreshToken);
            return {
                
                user : action.payload,
                isAuthenticated: true,
                loading: false
            };
        case LOGIN_PENDING:
            return {
                ...state,
                loading: true
            };
        case LOGIN_REJECTED:
            return {
                ...state,
                loading: false
            };
        case LOGOUT_FULFILLED:
            tokenUtil.clear();
            return {
                isAuthenticated: false,
                loading: false
            };
        case LOGOUT_PENDING:
            return {
                ...state,
                loading: true
            };
        case LOGOUT_REJECTED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
