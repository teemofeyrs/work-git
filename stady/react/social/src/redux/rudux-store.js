import {combineReducers, createStore} from "redux";
import messagesReduser from "./messagesReduser";
import profileReduser from "./profileReduser";


let reducers = combineReducers({
   profilePage: profileReduser,
    messagePage: messagesReduser
});
let store = createStore(reducers);

export default store;
