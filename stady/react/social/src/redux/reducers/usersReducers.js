/* variable */
import {UsersApi} from "../../apiDAL/api";

const FOLLOW_USERS = 'FOLLOW_USERS';
const UN_FOLLOW_USERS = 'UN_FOLLOW_USERS';
const HIRE = 'HIRE';
const MESSAGE = 'MESSAGE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_CURRENT_USER_PAGE = 'SET_CURRENT_USER_PAGE';
const IS_FETCHING = 'IS_FETCHING';
const IS_FOLLOWING_PROGRESS = 'IS_FOLLOWING_PROGRESS';

/*Action Creators */
export let followUser = (userId) => {
    return {type: FOLLOW_USERS, userId};
};
export let unFollowUser = (userId) => {
    return {type: UN_FOLLOW_USERS, userId};
};
export let hireUser = (userId) => {
    return {type: HIRE, userId};
};
export let setUsers = (users) => {
    return{type: SET_USERS, users}
}
export let setUsersTotalCount = (totalCount) =>{
    return {
        type: SET_TOTAL_USER_COUNT, totalCount
    }
}
export let setCurrentUserPage = (currentPage) => {
    return{ type: SET_CURRENT_USER_PAGE, currentPage }
}
export let isFetchingChange = (boolean) => {
    return{ type: IS_FETCHING, isFetching: boolean }
}
export let followingProgress = (boolean, userId) => {
    return{ type: IS_FOLLOWING_PROGRESS, boolean, userId }
}

/* Initialization state*/

let initialState = {
    users: [  ],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};
/* thunk creator*/
export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(isFetchingChange(true));
        UsersApi.getUsers(pageSize, currentPage).then(response => {
                dispatch(isFetchingChange(false));
                dispatch(setUsersTotalCount(response.data.totalCount));
                dispatch(setUsers(response.data.items));
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(followingProgress(true, userId));
        UsersApi.Follow(userId).then( data => { if(data.resultCode === 0) dispatch(followUser(userId))
                dispatch(followingProgress(false, userId));
            })
        }
    }
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(followingProgress(true, userId));
        UsersApi.unFollow(userId).then( data => { if(data.resultCode === 0) dispatch(unFollowUser(userId))
                dispatch(followingProgress(false, userId));
            })
    }
}

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
        case MESSAGE: {
            return {...state};
        }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case SET_CURRENT_USER_PAGE:
            return { ...state, currentPage: action.currentPage }
        case IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.boolean ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => {return id !== action.userId}),
            }
        default:
            return state;
    }
};

export default usersReducers;