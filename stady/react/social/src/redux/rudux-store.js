import {combineReducers, createStore} from "redux";
import messagesReducers from "./messagesReducers";
import profileReducers from "./profileReducers";


let reducers = combineReducers({
   profilePage: profileReducers,
    messagePage: messagesReducers
});
let store = createStore(reducers);
window.store = store;
export default store;
