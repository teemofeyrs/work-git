import {combineReducers, compose, createStore} from "redux";
import messagesReducers from "./messagesReducers";
import profileReducers from "./profileReducers";
import usersReducers from "./usersReducers";
import userProfileReducers from "./userProfileReducers";
import Immutable from 'immutable';
import authorizationRedusers from './reducers/authorizationRedusers'

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
let store = createStore(reducers, composeEnhancers());
window.store = store;
export default store;
