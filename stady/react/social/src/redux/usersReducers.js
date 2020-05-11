const FOLLOW_USERS = 'FOLLOW_USERS';
const UN_FOLLOW_USERS = 'UN_FOLLOW_USERS';
const HIRE = 'HIRE';
const MASSEGE = 'MASSEGE';
const SET_USERS = 'SET_USERS';

export let followUserAC = (userId) => {
    return {type: FOLLOW_USERS, userId};
};
export let unFollowUserAC = (userId) => {
    return {type: UN_FOLLOW_USERS, userId};
};
export let hireUserAC = (userId) => {
    return {type: HIRE, userId};
};
export let setUsersAC = (users) => {
    return{type: SET_USERS, users}
}
let initialState = {
    users: [

    ],
};
const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USERS: {
            return  {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.userId) {
                        return {...us, followed: true}
                    }
                    return us;
                })
            }
        }
        case UN_FOLLOW_USERS: {
            return  {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.userId) {
                        return {...us, followed: false}
                    }
                    return us;
                })
            }
        }
        case HIRE: {
            return {...state, hire: true};
        }
        case MASSEGE: {

            return {...state};
        }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        default:
            return state;
    }
};

export default usersReducers;