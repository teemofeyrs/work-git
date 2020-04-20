const ON_MESSAGE_CHANGE = 'ON-MESSAGE-TEXT-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
export let OnMessageChangeCreator = (text) => {
    return { type: ON_MESSAGE_CHANGE, text: text}
};
export let AddMessageCreator = () => {
    return { type: ADD_MESSAGE}
};

const messagesReduser = (state, action) => {
     if(action.type === 'ON-MESSAGE-TEXT-CHANGE'){
         state.newPostText = action.text;
    }else if(action.type === 'ADD-MESSAGE'){
        let message = {
            id: 1,
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            massage: state.newPostText
        };
         state.messageData.push(message);
         state.newPostText = '';
    }
    return state;
};
export default messagesReduser;