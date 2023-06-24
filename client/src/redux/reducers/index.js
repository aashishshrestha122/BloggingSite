import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import post from './post';
import comment from './comment';

export default combineReducers({
    auth,
    users,
    post,
    comment
});
