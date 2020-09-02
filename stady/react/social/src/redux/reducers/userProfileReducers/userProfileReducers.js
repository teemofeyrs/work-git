import {ProfileApi} from "../../../apiDAL/api";
const PROFILE_SET_USER = 'profile/SET_USER';


/* action creator*/
export let SetUser = (userInfo) => {
    return{
        type: PROFILE_SET_USER, userInfo
    }
}

/* initial state*/
const initialState = {
    userInfo: [],
}
/* redux thunk*/
export const userInit = (id) => (dispatch) => {
    ProfileApi.getProfile(id).then( response => {
        dispatch(SetUser(response.data));
    })
}
/*reducer*/
const userProfileReducers = (state= initialState, action) =>{
    switch (action.type) {
        case PROFILE_SET_USER: {
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