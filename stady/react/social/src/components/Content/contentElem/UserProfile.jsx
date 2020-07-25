import React from 'react';
import classesUserProfile from './UserProfile.module.css';
import {UserInfoContainer} from "./UserInfoContainer";
import {compose} from "redux";
import {AuthRedirect} from "../../../HOC/authRedirect";


const UserProfile = () => {
    return(
        <div>
            <div className={classesUserProfile.banner}></div>
            <div className={classesUserProfile.userInfo}>
                <UserInfoContainer/>
            </div>
        </div>
    );
};

export default compose(AuthRedirect)(UserProfile);