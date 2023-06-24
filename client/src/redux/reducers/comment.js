import {
    COMMENT_FULFILLED,
    COMMENT_PENDING,
    COMMENT_REJECTED
} from "../actions/comment";
// import * as tokenUtil from "../../utils/token";

const initialState = {
    comment: {},
    loading: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case COMMENT_FULFILLED:
            return {
                ...state,
                comment: action.payload,
                loading: false
            };
        case COMMENT_PENDING:
            return {
                ...state,
                loading: true
            };
        case COMMENT_REJECTED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
