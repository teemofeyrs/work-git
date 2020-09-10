import React, { useEffect, useState } from 'react'
import classesProfileInfo from './ProfileInfo.module.css'
import { NavLink } from 'react-router-dom'
import Status from './Status'
import Icon from '../../../reusable components/icon/Icon'
import imageProfile from './../../../../assets/img/no-profile.png'
import ProfileData from './ProfileData/ProfileData'
import ProfileDataFormRedux from './ProfileData/ProfileDataForm'

const ProfileInfo = ({myInfo, myStatus, changeStatusOnApi, updatePhoto,updateDataProfile, ...props}) => {
    const [status, setStatus] = useState(myStatus);
    const [editMode, setEditMode] = useState(false);
    const [editProfile, setEditProfile] = useState(false);
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
    const editDataProfile = () => {
        setEditProfile(true);
    }
    const onEditProfile = (formData) => {
        updateDataProfile(formData).then(() => {
                setEditProfile(false);} )
    }
    return (
        <div className={classesProfileInfo.userProfile}>
            <div className={classesProfileInfo.mainInfo}>
                <img src={(myInfo.photos.small || imageProfile)} alt='user'/>
                <label><Icon name={'camera'}/> <input onChange={addNewPhoto} type='file'/></label>
                <div className={classesProfileInfo.title}>
                    <Status status={status}
                            editMode={editMode}
                            ChangeStatus={ChangeStatus}
                            SetNewStatus={SetNewStatus}
                            setStatus={setStatus}/>
                </div>
            </div>
            <div className={classesProfileInfo.details}>
                <ul>
                    {!editProfile ? <p><Icon onClick={editDataProfile} name={'pencil'}/></p> : null}

                    {!editProfile ? <ProfileData myInfo={myInfo}/> :
                                    <ProfileDataFormRedux initialValues={myInfo}
                                                     onSubmit={onEditProfile}
                                                     myInfo={myInfo} {...props}/>}
                    <li className={classesProfileInfo.lastLi}>
                        <NavLink to={`/user-profile/${myInfo.userId}`}>View Profile</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export const Contacts = ({contactsTitle, contactsValue}) => {
    return(<div className={classesProfileInfo.contacts}>
            <b>{contactsTitle} : </b><span>{contactsValue || <i>'No Information'</i>}</span>
        </div>
    )
}
export default ProfileInfo;