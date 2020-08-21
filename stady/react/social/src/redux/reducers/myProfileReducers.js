import {ProfileApi} from "../../apiDAL/api";

const SET_ME = 'SET_ME';
export let SetMe = (myInfo) => {
    return{
        type: SET_ME, myInfo
    }
}
const initialState = {

}
export const indificateMe = (userID) => (dispatch) => {
    ProfileApi.getProfile(userID).then(
        response => dispatch(SetMe(response.data))
    )

}

const myProfileReducers = (state= initialState, action) =>{
    switch (action.type) {
        case SET_ME: {
            return{
                ...state, ...action.myInfo,
            }
        }
        default:
        {
            return state;
        }
    }
}
export default myProfileReducers;