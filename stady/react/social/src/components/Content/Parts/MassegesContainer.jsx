import React from 'react';
import {AddMessageCreator, OnMessageChangeCreator} from "../../../redux/messagesReduser";
import Masseges from "./Masseges";
const MessagesContainer = (props) => {
    let store = props.store;
    let state = store.getState().messagePage;
    let addMessage = () => {
        store.dispatch(AddMessageCreator())
    };
    let messageChange = (text) => {
        store.dispatch(OnMessageChangeCreator(text));
    };
    return (
        <Masseges state={state} newMessageText={state.newMessageText} addMessage={addMessage} messageChange={messageChange}/>
    );
};




export default MessagesContainer;