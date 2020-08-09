import {AuthApi} from "../../api/api";

const SET_AUTHORIZATION = 'SET_AUTHORIZATION';

export let setAuthorization = ({id, email, login}) => {
  return {type: SET_AUTHORIZATION, id, email, login };
};
export const auth = () => {

    return (dispatch) => {
        AuthApi.authMe().then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setAuthorization(response.data.data));
            })
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
    AuthApi.login(email, password, rememberMe).then(response => {
          if (response.data.resultCode === 0)
              dispatch(auth());
        }
    )
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};
const authorizationRedusers = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORIZATION: {

      return {...state, ...action, isAuth: true};
    }

    default:
      return state;
  }
};

export default authorizationRedusers;