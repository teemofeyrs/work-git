import React from "react";
import classesProfileInfo from './ProfileInfo.module.css';
import {Link} from "react-router-dom";

const ProfileInfo = () => {
    return (
        <div className={classesProfileInfo.userProfile}>
            <div className={classesProfileInfo.mainInfo}>
                <img src='https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg'
                     alt='user'/>
                     <div className={classesProfileInfo.title}>
                         <h3>John Dow</h3>
                         <span>Graphic Designer at Self Employed</span>
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
                        <Link  to="/">View Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default ProfileInfo;