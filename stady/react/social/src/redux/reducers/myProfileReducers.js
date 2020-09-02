import {ProfileApi} from "../../apiDAL/api";
import {stopSubmit} from "redux-form";
/* constants */
const PROFILE_SET_ME = 'PROFILE/SET_ME';
const PROFILE_UPLOAD_PHOTO = 'PROFILE/UPLOAD_PHOTO';

/* Action creators*/
export let SetMe = (myInfo) => {
    return{
        type: PROFILE_SET_ME, myInfo
    }
}
export const ChangePhoto = (photos) => {
    return {
        type: PROFILE_UPLOAD_PHOTO, photos
    }
}
/* redux thunk*/
export const indificateMe = (userID) => (dispatch) => {
    ProfileApi.getProfile(userID).then(
        response => dispatch(SetMe(response.data))
    )
}
export const updatePhoto = (photoFile) => async (dispatch) => {
     const response = await ProfileApi.uploadPhoto(photoFile);
            if(response.data.resultCode === 0 ) dispatch(ChangePhoto(response.data.data.photos))

};
export const updateDataProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.id;
    let response = await ProfileApi.editDataProfile(profile);
    if(response.data.resultCode === 0){
        dispatch(indificateMe(userId))
    }else {
        let massage = response.data.messages.length ? response.data.messages[0] : 'Some Error;'
        dispatch(stopSubmit('Profile Data', {_error: massage}));
        return Promise.reject(response.data.messages[0]);
    }
}
/* initialState */
let initialState = {

}
/* reducer*/
const myProfileReducers = (state= initialState, action) =>{
    switch (action.type) {
        case PROFILE_SET_ME: {
            return{
                ...state, ...action.myInfo,
            }
        }
        case PROFILE_UPLOAD_PHOTO: {
            return{
                ...state, photos : action.photos,
            }
        }
        default:
        {
            return state;
        }
    }
}
export default myProfileReducers;