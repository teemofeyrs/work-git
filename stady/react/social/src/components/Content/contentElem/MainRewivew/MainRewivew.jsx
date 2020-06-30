import React from "react";
import classesRewivewSection from './RewivewSection.module.css';
const MeinRewivew = (props) => {
    return(
        <div className={classesRewivewSection.main}>
           <h3>{props.userInfo.fullName}</h3>
        </div>
    );
};
export default MeinRewivew;