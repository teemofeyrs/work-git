import React from "react";
import classesPreloader from './classesPreloader.module.css';
import spinner from './../../../../assets/img/Spinner-1s-304px.png';

let Preloader = () => {
    return (
        <div className={classesPreloader.preloader}>
           <img src={spinner} alt={'spinner'}/>
        </div>
    );
};

export default Preloader;