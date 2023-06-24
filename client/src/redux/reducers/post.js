import {
    CREATE_POST_PENDING,
    CREATE_POST_FULFILLED,
    CREATE_POST_REJECTED,
    GET_ALL_POSTS_FULFILLED,
    GET_ALL_POSTS_PENDING,
    GET_ALL_POSTS_REJECTED,
    EDIT_POST_FULFILLED,
    EDIT_POST_PENDING,
    EDIT_POST_REJECTED
} from "../actions/post";
// import * as tokenUtil from "../../utils/token";

const initialState = {
    allPosts: {},
    posts: {},
    loading: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_POST_FULFILLED:
        case EDIT_POST_FULFILLED:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case GET_ALL_POSTS_FULFILLED:
            return {
                ...state,
                allPosts: action.payload,
                loading: false
            };
        case CREATE_POST_PENDING:
        case GET_ALL_POSTS_PENDING:
        case EDIT_POST_PENDING:
            return {
                ...state,
                loading: true
            };
        case CREATE_POST_REJECTED:
        case GET_ALL_POSTS_REJECTED:
        case EDIT_POST_REJECTED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
