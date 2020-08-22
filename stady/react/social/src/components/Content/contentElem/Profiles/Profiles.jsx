import React from 'react';
import classesProfiles from './Profiles.module.css';
import UsersContainerAPI from "./UsersContainerAPI";

const Profiles = () => {
    return(
        <div className={classesProfiles.profile}>
            <UsersContainerAPI/>
        </div>

    );
};
export default Profiles;