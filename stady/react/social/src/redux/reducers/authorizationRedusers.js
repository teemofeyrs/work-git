const SET_AUTHORIZATION = 'SET_AUTHORIZATION';



export let setAuthorization = ({id, email, login}) => {
  return {type: SET_AUTHORIZATION, data:{id, email, login} };
};

let initialState = {
    id: null,
    email: null,
    login: null
};
const authorizationRedusers = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORIZATION: {

      return {...state, ...action.data};
    }

    default:
      return state;
  }
};

export default authorizationRedusers;