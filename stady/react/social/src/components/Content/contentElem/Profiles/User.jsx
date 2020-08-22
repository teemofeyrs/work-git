import React from "react";
import classesUser from './User.module.css';
import {NavLink} from "react-router-dom";
import Icon from '../../../reusable components/icon/Icon'
import addressImg from './../../../../assets/img/no-profile.png';


const User = ({user, followingInProgress, unFollow, follow}) => {

    return (
        <div>
            <div className={classesUser.container}>
                <div className={classesUser.main}>
                    <div>
                        <NavLink to={`/user-profile/${user.id}`}>
                            <img src={user.photos.small != null ? user.photos.small :
                                addressImg} alt={user.id}/>
                        </NavLink>
                        <h3>{user.name}</h3>
                        <h4>React Developer</h4>
                    </div>
                    <div>
                        {user.followed ? <button
                                disabled={followingInProgress.some(id => { return  id === user.id})}
                                className={classesUser.follow}
                                   onClick={() => { unFollow(user.id)}}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => {return  id === user.id})}
                                      className={classesUser.follow}
                                      onClick={() => { follow(user.id) }}>Follow</button> }
                        <button className={classesUser.mail}>
                            <Icon name={'envelope-o'}/>
                            </button>
                        <button className={classesUser.hire}>Hire</button>
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