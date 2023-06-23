import {
    SIGNUP_PENDING,
    SIGNUP_FULFILLED,
    SIGNUP_REJECTED
} from "../actions/auth";
// import * as tokenUtil from "../../utils/token";

const initialState = {
    id: null,
    isAuthenticated: false,
    loading: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_FULFILLED:
            return {
                ...state,
                ...action.payload,
                id: action.payload,
                isAuthenticated: true,
                loading: false
            };
        case SIGNUP_PENDING:
            return {
                ...state,
                loading: true,
                id : null
            };
        case SIGNUP_REJECTED:
            return {
                ...state,
                loading: false,
                id : null
            };
        default:
            return state;
    }
}
