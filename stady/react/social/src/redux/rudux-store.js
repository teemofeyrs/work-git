import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messagesReducers from "./reducers/messagesReducers";
import profileReducers from "./reducers/profileReducers";
import usersReducers from "./reducers/usersReducers";
import userProfileReducers from "./reducers/userProfileReducers/userProfileReducers";
import Immutable from 'immutable';
import authorizationReducers from './reducers/authorizationReducers';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import myProfileReducers from "./reducers/myProfileReducers";
import appRedusers from "./reducers/appRedusers";

const composeEnhancers = typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: {
            immutable: Immutable
        }
    }) : compose;

let reducers = combineReducers({
    appInit: appRedusers,
    profilePage: profileReducers,
    messagePage: messagesReducers,
    usersPage: usersReducers,
    user: userProfileReducers,
    auth: authorizationReducers,
    form: formReducer,
    myInfo: myProfileReducers,
});


let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
