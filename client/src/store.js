import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';

import rootReducer from "./redux/reducers";

const initialState = {};

const middlewares = [thunk, promise];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
