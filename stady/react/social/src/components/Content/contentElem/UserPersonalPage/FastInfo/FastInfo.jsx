import React from "react";
import classesFastInfo from "./FastInfo.module.css";
import noProfile from './../../../../../assets/img/no-profile.png'
const FastInfo = (props) => {
    return(
        <div className={classesFastInfo.fastInfo}>
            <div className={classesFastInfo.userPhoto}>
                <img src={props.userInfo.photos.small || noProfile} alt={props.userInfo.fullName}/>
            </div>
            <div className={classesFastInfo.userStatus}>
                <div>
                    <p>Following</p>
                    <h4>34</h4>
                </div>
                <div>
                    <p>Followers</p>
                    <h4>155 </h4>
                </div>
            </div>
            <div className={classesFastInfo.userSocialPages}>
                <ul>
                    <li><i className="fa fa-globe" aria-hidden="true"></i><a href="www.example.com">www.example.com</a></li>
                    <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="www.facebook.com">www.facebook.com</a></li>
                    <li><i className="fa fa-twitter-square" aria-hidden="true"></i><a href="www.twitter.com">www.twitter.com</a></li>
                    <li><i className="fa fa-google-plus-square" aria-hidden="true"></i><a href="www.googleplus.com">www.googleplus.com</a></li>
                    <li><i className="fa fa-behance-square" aria-hidden="true"></i><a href="www.behance.com">www.behance.com</a></li>
                    <li><i className="fa fa-pinterest-square" aria-hidden="true"></i><a href="www.pinterest.com">www.pinterest.com</a></li>
                    <li><i className="fa fa-instagram" aria-hidden="true"></i><a href="www.instargam.com">www.instargam.com</a></li>
                    <li><i className="fa fa-youtube-play" aria-hidden="true"></i><a href="www.youtube.com">www.youtube.com</a></li>
                </ul>
            </div>

            <div>{props.userInfo.aboutMe}</div>
            <div>{props.userInfo.lookingForAJobDescription}</div>
            <div>{props.userInfo.fullName}</div>
        </div>
    );
}
export default FastInfo;