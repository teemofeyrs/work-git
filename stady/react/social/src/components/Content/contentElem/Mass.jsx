import React from 'react';
import classesMasseges from './Masseges.module.css';
import MessagesContainer from "../Parts/MassegesContainer";
import DialogsContainer from "../Parts/DialogsContainer";

const Mass = (props) => {
    return (
        <div className={classesMasseges.masseges}>
            <DialogsContainer/>
            <MessagesContainer/>
        </div>
    );
};
export default Mass;