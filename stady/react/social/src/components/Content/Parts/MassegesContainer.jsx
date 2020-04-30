import React from 'react';
import {AddMessageCreator, OnMessageChangeCreator} from "../../../redux/messagesReduser";
import Masseges from "./Masseges";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        newMessageText: state.newMessageText,
    };
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addMessage: () => {
            dispatch(AddMessageCreator())
        },
        messageChange: (text) =>{
            dispatch(OnMessageChangeCreator(text))
        }
    };
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Masseges)

export default MessagesContainer;