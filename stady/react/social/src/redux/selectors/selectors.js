/* authorization selectors*/
export const getIsAuth = (state) => {
    return state.auth.isAuth;
};
export const getMyId = (state) => {
    return state.auth.id;
};
export const getCaptchaSelec = (state) => {
    return state.auth.captcha;
};

/* myInfo selectors*/
export const getFullName = (state) => {
    return state.myInfo.fullName;
};
export const getMyInfo = (state) => {
    return {...state.myInfo};
};

/* app selectors*/
export const gerInitApp = (state) => {
    return state.appInit.initApp;
}

/* profile selectors*/
export const getProfileStatus = (state) => {
    return state.user.userStatus;
}

/* users selectors*/
export const getUsers = (state) => {
    return state.usersPage.users;
}