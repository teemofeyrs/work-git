import profileReducers from "./reducers/profileReducers";
import messagesReducers from "./reducers/messagesReducers";


let store = {
    _state: {
        profilePage: {
            posts: [
                {
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
                    img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
                    name: 'John Doe',
                    textPost: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,',
                    likes: 25,
                    comments: 15,
                    views: 35
                }
            ],
            newPostText: 'post text',
        },
        messagePage: {
            messageData: [
                {
                    id: 1,
                    img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
                    massage: 'Lorem idivsum dolor sit amet, consectetur adidivisicing elit. Aliquid asdiveriores earum, fuga labore\n' +
                        '                        officiis quisquam\n' +
                        '                        sunt?'
                },
                {
                    id: 2,
                    img: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
                    massage: 'Lorem idivsum dolor sit amet, consectetur adidivisicing elit. Adidivisci, blanditiis debitis, harum,\n' +
                        '                        illo idivsa\n' +
                        '                         Asdivernatur\n' +
                        '                        dolorem\n' +
                        '                        quibusdam vero? Libero, ullam.'
                },
                {
                    id: 2,
                    img: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
                    massage: 'Lorem idivsum dolor sit amet, consectetur adidivisicing elit.'
                },
                {
                    id: 1,
                    img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
                    massage: 'Lorem idivsum dolor sit amet, consectetur adidivisicing elit. Aliquid asdiveriores earum, fuga labore officia divorro divossimus divrovident quas quasi temdivoribus ? '
                },
            ],
            dialogs: [
                {
                    id: 1,
                    img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
                    name: 'John Doe'
                },
                {
                    id: 2,
                    img: "https://cxl.com/wp-content/uploads/2016/03/nate_munger.png",
                    name: 'Dimych'
                },
                {
                    id: 3,
                    img: 'https://s3.amazonaws.com/37assets/svn/1024-original.1e9af38097008ef9573f03b03ef6f363219532f9.jpg',
                    name: 'Yura'
                },
                {
                    id: 4,
                    img: 'https://dcavozvb40vtt.cloudfront.net/api/file/0ubAiutLQU2XjZSGvd37',
                    name: 'Misha'
                },
                {
                    id: 5,
                    img: 'https://fedspendingtransparency.github.io/assets/img/user_personas/journalist_mug.jpg',
                    name: 'Alina'
                },
                {
                    id: 6,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0AIdmvnkOh4_odOdtEMSWJTjU7R41kPjbVOOyOK9euu9ENhKJ&usqp=CAU',
                    name: 'Natasha'
                },
                {
                    id: 7,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTny0zZ6Fxf3YtRhIi0bNmQ1tmqS8MkQasEi2xmcpAPxqmYdw04&usqp=CAU',
                    name: 'Elizabet'
                },
            ],
            newMessageText: ''
        },
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    dispatch(action){
        this._state.profilePage = profileReducers(this._state.profilePage, action);
        this._state.messagePage = messagesReducers(this._state.messagePage, action);
        this._callSubscriber(this._state);
    },
        subscribe (observer){
        this._callSubscriber = observer;
    }
};


window.store = store;
export default store;