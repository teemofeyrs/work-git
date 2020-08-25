import React from "react";
import {Contacts} from "../ProfileInfo";

const ProfileData = ({myInfo}) => {
    return(
        <>
            <li>
                <h4>Full name</h4>
                <h3>{myInfo.fullName}</h3>
            </li>
            <li>
                <h4>About me</h4>
                <span>{myInfo.aboutMe || 'No Information'}</span>
            </li>
            <li>
                <h4>Looking for a job</h4>
                <span>{myInfo.lookingForAJob ? 'Yes' : 'No'}</span>
            </li>
            <li>
                <h4>Looking for a job description</h4>
                <span>{myInfo.lookingForAJobDescription || 'No Information'}</span>
            </li>
            <li>
                <h4>Contacts</h4>
                {Object.keys(myInfo.contacts).map( key => {
                    return <Contacts key={key} contactsTitle={key} contactsValue={myInfo.contacts[key]}/>
                })}
            </li>
        </>
    )
};

export default ProfileData;