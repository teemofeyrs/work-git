import React from "react";
import classesPreloader from './classesPreloader.module.css';
import spinner from './../../../../assets/img/Spinner.gif';

let Preloader = () => {
    return (
        <div className={classesPreloader.fetch}>
           <img src={spinner} alt={'spinner'}/>
        </div>
    );
};

export default Preloader;