import {UsersApi} from "../../apiDAL/api";

/* variable */
const USERS_FOLLOW_USERS = 'USERS/FOLLOW_USERS';
const USERS_UN_FOLLOW_USERS = 'USERS/UN_FOLLOW_USERS';
const USERS_HIRE = 'USERS/HIRE';
const USERS_SET_USERS = 'USERS/SET_USERS';
const USERS_SET_TOTAL_USER_COUNT = 'USERS/SET_TOTAL_USER_COUNT';
const USERS_SET_CURRENT_USER_PAGE = 'USERS/SET_CURRENT_USER_PAGE';
const USERS_IS_FETCHING = 'USERS/IS_FETCHING';
const USERS_IS_FOLLOWING_PROGRESS = 'USERS/IS_FOLLOWING_PROGRESS';

/*Action Creators */
export let followUser = (userId) => {
    return {type: USERS_FOLLOW_USERS, userId};
};
export let unFollowUser = (userId) => {
    return {type: USERS_UN_FOLLOW_USERS, userId};
};
export let hireUser = (userId) => {
    return {type: USERS_HIRE, userId};
};
export let setUsers = (users) => {
    return{type: USERS_SET_USERS, users}
}
export let setUsersTotalCount = (totalCount) =>{
    return {
        type: USERS_SET_TOTAL_USER_COUNT, totalCount
    }
}
export let setCurrentUserPage = (currentPage) => {
    return{ type: USERS_SET_CURRENT_USER_PAGE, currentPage }
}
export let isFetchingChange = (boolean) => {
    return{ type: USERS_IS_FETCHING, isFetching: boolean }
}
export let followingProgress = (boolean, userId) => {
    return{ type: USERS_IS_FOLLOWING_PROGRESS, boolean, userId }
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
 const foolowUnfollowSacces = (userId, ApiMethod, actionOfFollowed) => {
    return (dispatch) =>{
        dispatch(followingProgress(true, userId));
        ApiMethod(userId).then( data => {
            if (data.resultCode === 0)
                dispatch(actionOfFollowed(userId))
            dispatch(followingProgress(false, userId));
        })
    }
 }
export const follow = (userId) => {
    return  foolowUnfollowSacces(userId, UsersApi.Follow, followUser)
    /*
    return (dispatch) => {
        dispatch(followingProgress(true, userId));
        UsersApi.Follow(userId).then( data => { if(data.resultCode === 0) dispatch(followUser(userId))
                dispatch(followingProgress(false, userId));
            })
        }*/
    }
export const unFollow = (userId) => {
    return  foolowUnfollowSacces(userId, UsersApi.unFollow, unFollowUser)

    /*return (dispatch) => {
        dispatch(followingProgress(true, userId));
        UsersApi.unFollow(userId).then( data => { if(data.resultCode === 0) dispatch(unFollowUser(userId))
                dispatch(followingProgress(false, userId));
            })
    }*/
}

/*user reducers*/
const usersReducers = (state = initialState, action) => {

    switch (action.type) {
        case USERS_FOLLOW_USERS: {
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
        case USERS_UN_FOLLOW_USERS: {
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
        case USERS_HIRE: {
            return {...state, hire: true};
        }
        case USERS_SET_USERS:
            return {
                ...state, users: action.users
            }
        case USERS_SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case USERS_SET_CURRENT_USER_PAGE:
            return { ...state, currentPage: action.currentPage }
        case USERS_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case USERS_IS_FOLLOWING_PROGRESS:
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