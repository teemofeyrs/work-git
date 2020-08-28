import {AuthApi} from "../../apiDAL/api";
import {stopSubmit} from "redux-form";
import {dischargeInit} from "./appRedusers";

/* variable */
const AUTH_SET_AUTHORIZATION = 'auth/SET_AUTHORIZATION';
const AUTH_LOGOUT = 'auth/LOGOUT';
const AUTH_SET_CAPTCHA = 'auth/SET_CAPTCHA';

/*Action Creators */
export let setAuthorization = ({id, email, login}) => {
  return {type: AUTH_SET_AUTHORIZATION, id, email, login };
};
export let afterLogout = () => {
    return {type: AUTH_LOGOUT };
};
export const setCaptcha = (url) => {
    return {
        type: AUTH_SET_CAPTCHA, url
    }
}
/*redux thunk*/
export const auth = () => async (dispatch) => {
    const response = await AuthApi.authMe();
    if (response.data.resultCode === 0) {
        dispatch(setAuthorization(response.data.data))
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await AuthApi.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0){
        dispatch(auth())
    }else if(response.data.resultCode === 10){
        AuthApi.getCapthaUrl().then((response) =>{
            dispatch(setCaptcha(response.data.url))
        })
    }else {
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
    isAuth: false,
    captchaUrl: null
};

/*authorization reducers*/
const authorizationReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_AUTHORIZATION: {
      return {...state, ...action, isAuth: true};
    }
      case AUTH_LOGOUT: {
          return {...state, id:null, email: null, login: null,  isAuth: false};
      }
      case AUTH_SET_CAPTCHA: {
          return {
              ...state, captcha: action.url
          }
      }
    default:
      return state;
  }
};

export default authorizationReducers;