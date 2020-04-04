import React from 'react';
import classesMasseges from './Masseges.module.css';
import Dialogs from "../Parts/Dialogs";
import Masseges from "../Parts/Masseges";

const Mass = () => {
    return(
        <div className={classesMasseges.masseges}>
            <Dialogs/>
            <Masseges/>
        </div>
    );
};
export default Mass;