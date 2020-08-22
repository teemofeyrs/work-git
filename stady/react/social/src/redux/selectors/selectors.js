export const getIsAuth = (state) => {
    return state.auth.isAuth;
};
export const getMyId = (state) => {
    return state.auth.id;
};
export const getMyInfo = (state) => {
    return {...state.myInfo};
};
export const getFullName = (state) => {
    return state.myInfo.fullName;
};
export const gerInitApp = (state) => {
    return state.appInit.initApp;
}
export const getProfileStatus = (state) => {
    return state.user.userStatus;
}