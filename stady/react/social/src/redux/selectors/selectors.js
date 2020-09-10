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
    return state.profilePage.userStatus;
}
export const getPosts = (state) => {
    return state.profilePage.posts;
}
export  const getNewPostText = (state) => {
    return state.profilePage.newPostText;
}
/* users selectors*/
export const getUsers = (state) => {
    return state.usersPage.users;
}

/*user profile selectors*/
export const getUserProfileInfo = (state) => {
    return state.user.userInfo;
}