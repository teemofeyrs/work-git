const SET_USER = 'SET_USER';


export let SetUser = (userInfo) => {
    return{
        type: SET_USER, userInfo
    }
}
const initialState = {
    userInfo: []
}

const userProfileReducers = (state= initialState, action) =>{
    switch (action.type) {
        case SET_USER: {
            return{
                ...state, userInfo : action.userInfo,
            }
        }
        default:
        {
            return state;
        }
    }
}
export default userProfileReducers;