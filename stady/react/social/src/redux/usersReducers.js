const FOLLOW_USERS = 'FOLLOW_USERS';
const UN_FOLLOW_USERS = 'UN_FOLLOW_USERS';
const HIRE = 'HIRE';
const MESSAGE = 'MESSAGE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_CURRENT_USER_PAGE = 'SET_CURRENT_USER_PAGE';
const IS_FETCHING = 'IS_FETCHING';


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
export let setTotalUserCountAC = (totalCount) =>{
    return {
        type: SET_TOTAL_USER_COUNT, totalCount
    }
}
export let setCurrentUserPageAC = (currentPage) => {
    return{type: SET_CURRENT_USER_PAGE, currentPage}
}
export let isFetchingAC = (isFetching) => {
    return{type: IS_FETCHING, isFetching}
}
let initialState = {
    users: [

    ],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case MESSAGE: {

            return {...state};
        }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount,
            }
        case SET_CURRENT_USER_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching,
            }
        default:
            return state;
    }
};

export default usersReducers;