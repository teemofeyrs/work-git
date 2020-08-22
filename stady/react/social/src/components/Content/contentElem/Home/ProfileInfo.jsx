import React, {useEffect, useState} from 'react'
import classesProfileInfo from './ProfileInfo.module.css';
import {NavLink} from "react-router-dom";
import Status from './Status'
import Icon from "../../../reusable components/icon/Icon";
import imageProfile from './../../../../assets/img/no-profile.png';


const ProfileInfo = ({myInfo, myStatus, changeStatusOnApi, updatePhoto}) => {
    const [status, setStatus] = useState(myStatus);
    const [editMode, setEditMode] = useState(false);
    const ChangeStatus = () => {
        setEditMode(true);
    }
    const SetNewStatus = () => {
        setEditMode(false);
        setStatus(status);
        changeStatusOnApi(status);
    }

    useEffect(() => {
        setStatus(myStatus)
    }, [myStatus])
    const addNewPhoto = (e) => {
        debugger
        if(e.target.files.length) {
            updatePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={classesProfileInfo.userProfile}>
            <div className={classesProfileInfo.mainInfo}>
                <img src={(myInfo.photos.small || imageProfile)} alt='user'/>
                <label><Icon name={'camera'}/> <input onChange={addNewPhoto} type='file'/></label>
                <div className={classesProfileInfo.title}>
                    <h3>{myInfo.fullName}</h3>
                    <span>{myInfo.aboutMe}</span>
                    <Status status={status}
                            editMode={editMode}
                            ChangeStatus={ChangeStatus}
                            SetNewStatus={SetNewStatus}
                            setStatus={setStatus}/>
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
                        <NavLink to={`/user-profile/${myInfo.userId}`}>View Profile</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default ProfileInfo;