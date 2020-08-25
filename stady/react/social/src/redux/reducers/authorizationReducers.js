import {AuthApi} from "../../apiDAL/api";
import {stopSubmit} from "redux-form";
import {dischargeInit} from "./appRedusers";

/* variable */
const SET_AUTHORIZATION = 'auth/SET_AUTHORIZATION';
const LOGOUT = 'auth/LOGOUT';

/*Action Creators */
export let setAuthorization = ({id, email, login}) => {
  return {type: SET_AUTHORIZATION, id, email, login };
};
export let afterLogout = () => {
    return {type: LOGOUT };
};

/*redux thunk*/
export const auth = () => async (dispatch) => {
    const response = await AuthApi.authMe();
    if (response.data.resultCode === 0) {
        dispatch(setAuthorization(response.data.data))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await AuthApi.login(email, password, rememberMe);
    if (response.data.resultCode === 0)
        dispatch(auth())
    else {
        let massage = response.data.messages.length ? response.data.messages[0] : 'Some Error;'
        dispatch(stopSubmit('sign in form', {_error: massage}));
    }
}
export const logOut = () => (dispatch) => {
    AuthApi.logout().then( () => {
        dispatch(afterLogout());
        dispatch(dischargeInit());
    });
}

/* Initialization state*/
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

/*authorization reducers*/
const authorizationReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORIZATION: {
      return {...state, ...action, isAuth: true};
    }
      case LOGOUT: {
          debugger
          return {...state, id:null, email: null, login: null,  isAuth: false};
      }
    default:
      return state;
  }
};

export default authorizationReducers;