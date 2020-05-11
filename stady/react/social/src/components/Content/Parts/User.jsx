import React from "react";
import classesUser from './User.module.css';
const addressImg = 'https://randomuser.me/api/portraits/med/men/85.jpg';
const User = (props) => {
    let onFollow = (userID) => {

        props.follow(userID);
    };
    let onUnFollow = (userID) => {

        props.unFollow(userID);
    };
    let onHire = (usreID) => {
        props.hire(usreID)
    };
    return (
        <div className={classesUser.container}>
            <div className={classesUser.main}>
              <div>
                  <img src={props.user.photos.small != null ? props.user.photos.small :
                      addressImg} alt={props.user.id}/>
                    <h3>{props.user.name}</h3>
                    <h4>React Developer</h4>
              </div>
                <div className={classesUser.BtnGroup}>
                    {props.user.followed ? <button className={classesUser.follow} onClick={() => {onUnFollow(props.user.id)}}>Unfollow</button> :
                        <button className={classesUser.follow} onClick={() => {onFollow(props.user.id)}}>Follow</button> }
                    <button className={classesUser.mail}>{<i className="fa fa-envelope-o" aria-hidden="true"></i>}</button>
                    <button className={classesUser.hire}>Hire</button>
                </div>
            </div>
            <div className={classesUser.view}>
                <button className={classesUser.viewProfile}>View Profile</button>
            </div>
        </div>
    );
};

export default User;