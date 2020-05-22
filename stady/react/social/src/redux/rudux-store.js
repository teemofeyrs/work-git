import {combineReducers, createStore} from "redux";
import messagesReducers from "./messagesReducers";
import profileReducers from "./profileReducers";
import usersReducers from "./usersReducers";


let reducers = combineReducers({
   profilePage: profileReducers,
    messagePage: messagesReducers,
    usersPage: usersReducers
});
let store = createStore(reducers);
window.store = store;
export default store;
