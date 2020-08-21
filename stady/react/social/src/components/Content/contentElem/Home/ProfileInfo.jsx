import React from "react";
import classesProfileInfo from './ProfileInfo.module.css';
import {NavLink} from "react-router-dom";
import imageProfile from './.././../../../assets/img/no-profile.png';
const ProfileInfo = (props) => {
    return (
        <div className={classesProfileInfo.userProfile}>
            <div className={classesProfileInfo.mainInfo}>
                <img src={imageProfile}
                     alt='user'/>
                     <div className={classesProfileInfo.title}>
                         <h3>{props.myInfo.fullName}</h3>
                         <span>{props.myInfo.aboutMe}</span>
                         <span>{props.myStaus}</span>
                     </div>
            </div>
            <div className={classesProfileInfo.details}>
                <ul>
                    <li>
                        <h4>Following</h4>
                        <span>34</span>
                    </li>
                    <li>
                        <h4>Followers</h4>
                        <span>155</span>
                    </li>
                    <li>
                        <NavLink to={`/user-profile/${props.myInfo.userId}`}>View Profile</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default ProfileInfo;