import { auth } from './authorizationReducers'

/* variable */
const APP_SET_INITIALIZATION = 'APP/SET_INITIALIZATION';
const APP_AFTER_LOGOUT = 'APP/AFTER_LOGOUT';

/*Action Creators */
export let initialization = () => {
  return {type: APP_SET_INITIALIZATION };
};
export let dischargeInit = () => {
    return {type: APP_AFTER_LOGOUT};
};
export const toInitialize = () => async (dispatch) => {
       let promiseAuth = await dispatch(auth());
       Promise.all([promiseAuth]).then(() => {
           dispatch(initialization())
       })
    console.log(promiseAuth);
}
/* Initialization state*/
let initialState = {
    initApp: false,
};

/*app reducers*/
const initializationRedusers = (state = initialState, action) => {
  switch (action.type) {
    case APP_SET_INITIALIZATION: {
      return {...state, initApp: true};
    }
    case APP_AFTER_LOGOUT: {
      return {...state, initApp: false};
    }
    default:
      return state;
  }
};

export default initializationRedusers;