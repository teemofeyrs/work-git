import {ProfileApi} from "../../../apiDAL/api";
const PROFILE_SET_USER = 'profile/SET_USER';
const PROFILE_SET_STATUS = 'profile/SET_STATUS';

/* action creator*/
export let SetUser = (userInfo) => {
    return{
        type: SET_USER, userInfo
    }
}
export let SetStatus = (status) => {
    return{
        type: SET_USER, status
    }
}
/* initial state*/
const initialState = {
    userInfo: [],
    userStatus: '',
}
/* redux thunck*/
export const userInit = (id) => (dispatch) => {
    ProfileApi.getProfile(id).then( response => {
        dispatch(SetUser(response.data));
    })
}
export const profileStatusInit = (id) => async (dispatch) => {
   let response = await ProfileApi.getStatus(id);
        dispatch(SetStatus(response.data));

}
/*reducer*/
const userProfileReducers = (state= initialState, action) =>{
    switch (action.type) {
        case PROFILE_SET_USER: {
            return{
                ...state, userInfo : action.userInfo,
            }
        }
        case PROFILE_SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
        {
            return state;
        }
    }
}
export default userProfileReducers;