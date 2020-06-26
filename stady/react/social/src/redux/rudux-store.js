import {combineReducers, createStore} from "redux";
import messagesReducers from "./messagesReducers";
import profileReducers from "./profileReducers";
import usersReducers from "./usersReducers";
import userProfileReducers from "./userProfileReducers";


let reducers = combineReducers({
    profilePage: profileReducers,
    messagePage: messagesReducers,
    usersPage: usersReducers,
    user: userProfileReducers
});
let store = createStore(reducers);
window.store = store;
export default store;
