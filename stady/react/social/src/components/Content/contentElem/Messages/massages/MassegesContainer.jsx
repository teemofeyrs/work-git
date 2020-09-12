import { AddMessageCreator, OnMessageChangeCreator } from '../../../../../redux/reducers/messagesReducers'
import Masseges from './Masseges'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return{
        newPostText: state.messagePage.newPostText,
        messageData: state.messagePage.messageData
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