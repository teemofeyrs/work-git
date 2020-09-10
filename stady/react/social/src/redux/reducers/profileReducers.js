import {ProfileApi} from "../../apiDAL/api";

const ADD_POST = 'ADD-POST';
/*const ON_POST_CHANGE = 'ON-POST-TEXT-CHANGE';*/
const PROFILE_SET_STATUS = 'profile/SET_STATUS';

/* action creator*/
export let AddPostAC = (postText) => {
    return {type: ADD_POST, postText};
};
/*export let OnPostChange = (text) => {
    return {type: ON_POST_CHANGE, text: text};
};*/
export let SetStatus = (status) => {
    return{
        type: PROFILE_SET_STATUS, status
    }
}
/* redux thunk*/
export const profileStatusInit = (id) => async (dispatch) => {
    let response = await ProfileApi.getStatus(id);
    dispatch(SetStatus(response.data));
}
export const changeStatusOnApi = (newStatus) => async (dispatch) => {
    let response = await ProfileApi.setStatus(newStatus);
    if(response.data.resultCode === 0) dispatch(SetStatus(newStatus));
};

/* initial state*/
let initialState = {
    posts: [
        {
            id:1,
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            name: 'John Doe',
            textPost: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
                '                    the\n' +
                '                    industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of\n' +
                '                    type\n' +
                '                    and scrambled it to make a type specimen book.',
            likes: 25,
            comments: 15,
            views: 35
        },
        {
            id:2,
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            name: 'John Doe',
            textPost: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,',
            likes: 25,
            comments: 15,
            views: 35
        }
    ],
    newPostText: 'post text',
    userStatus: null,
};


const profileReducers = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if(!action.postText) return state;
            let stateCopy = {...state};
                stateCopy.posts = [...state.posts];
            let newPost = {
                id: action.postText,
                img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
                name: 'John Doe',
                textPost: action.postText,
                likes: 0,
                comments: 0,
                views: 0
            };
            stateCopy.posts.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
       /* case ON_POST_CHANGE:
        {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }*/
        case PROFILE_SET_STATUS: {
            return {
                ...state, userStatus: action.status
            }
        }
        default:
            return state;
    }
};

export default profileReducers;