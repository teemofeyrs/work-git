import React from 'react';
import classesProfiles from './Profiles.module.css';
import UsersContainerAPI from "../Parts/UsersContainerAPI";

const Profiles = () => {
    return(
        <div className={classesProfiles.profile}>
            <UsersContainerAPI/>
        </div>

    );
};
export default Profiles;