import React from "react";
import classesUser from './User.module.css';
import {NavLink} from "react-router-dom";
const addressImg = 'https://randomuser.me/api/portraits/med/men/85.jpg';
const User = (props) => {
    let onFollow = (userID) => {
        props.followUser(userID);
    };
    let onUnFollow = (userID) => {

        props.unFollowUser(userID);
    };
    let onHire = (usreID) => {
        props.hireUser(usreID)
    };

    return (
        <div>
            <div className={classesUser.container}>
                <div className={classesUser.main}>
                    <div>
                        <NavLink to={`/user-profile/${props.user.id}`}>
                            <img src={props.user.photos.small != null ? props.user.photos.small :
                                addressImg} alt={props.user.id}/>
                        </NavLink>
                        <h3>{props.user.name}</h3>
                        <h4>React Developer</h4>
                    </div>
                    <div>
                        {props.user.followed ? <button className={classesUser.follow} onClick={() => {onUnFollow(props.user.id)}}>Unfollow</button> :
                            <button className={classesUser.follow} onClick={() => {onFollow(props.user.id)}}>Follow</button> }
                        <button className={classesUser.mail}>{<i className="fa fa-envelope-o" aria-hidden="true"></i>}</button>
                        <button className={classesUser.hire} onClick={ () => {onHire(props.user.id)}}>Hire</button>
                    </div>
                </div>
                <div className={classesUser.view}>
                    <button className={classesUser.viewProfile}>View Profile</button>
                </div>
            </div>
        </div>

    );
};

export default User;