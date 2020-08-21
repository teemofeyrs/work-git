import {AuthApi} from "../../apiDAL/api";
import {stopSubmit} from "redux-form";
import {auth} from "./authorizationRedusers";
import {indificateMe} from "./myProfileReducers";

const SET_INITIALIZATION = 'SET_INITIALIZATION';
const AFTER_LOGOUT = 'AFTER_LOGOUT';

export let initialization = () => {
  return {type: SET_INITIALIZATION };
};
export let dischargeInit = () => {
    return {type: AFTER_LOGOUT};
};
export const toInitialize = () => async (dispatch) => {
    debugger
       let promiseAuth = await dispatch(auth());
       Promise.all([promiseAuth]).then(() => {
           dispatch(initialization())
       })
    console.log(promiseAuth);
}

let initialState = {
    initApp: false,
};
const initializationRedusers = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZATION: {
      return {...state, initApp: true};
    }
    case AFTER_LOGOUT: {
      return {...state, initApp: false};
    }
    default:
      return state;
  }
};

export default initializationRedusers;