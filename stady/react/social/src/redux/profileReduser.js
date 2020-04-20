const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-TEXT-CHANGE';
export let AddPostCreator = () => {
    return {type: ADD_POST};
};
export let OnPostChangeCreator = (text) => {
    return {type: ON_POST_CHANGE, text: text};
};


const profileReduser = (state, action) => {

    if(action.type === 'ADD-POST'){
        let newPost = {
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            name: 'John Doe',
            textPost: state.newPostText,
            likes: 0,
            comments: 0,
            views: 0
        };
        state.posts.unshift(newPost);
        state.newPostText = '';
    }else if(action.type === 'ON-POST-TEXT-CHANGE'){
        state.newPostText = action.text;
    }
    return state;
};

export default profileReduser;