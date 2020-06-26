import React from 'react';
import classesUserProfile from './UserProfile.module.css';
import {UserInfoContainer} from "./UserInfoContainer";


const UserProfile = () => {
    return(
        <div>
            <div className={classesUserProfile.banner}></div>
            <UserInfoContainer/>
        </div>
    );
};

export default UserProfile;