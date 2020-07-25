import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messagesReducers from "./reducers/messagesReducers";
import profileReducers from "./reducers/profileReducers";
import usersReducers from "./usersReducers";
import userProfileReducers from "./userProfileReducers";
import Immutable from 'immutable';
import authorizationRedusers from './reducers/authorizationRedusers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: {
            immutable: Immutable
        }
    }) : compose;

let reducers = combineReducers({
    profilePage: profileReducers,
    messagePage: messagesReducers,
    usersPage: usersReducers,
    user: userProfileReducers,
    auth: authorizationRedusers,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
