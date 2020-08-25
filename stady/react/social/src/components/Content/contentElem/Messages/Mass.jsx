import React from 'react';
import classesMasseges from './Masseges.module.css';
import MessagesContainer from "./massages/MassegesContainer";
import DialogsContainer from "./dialogs/DialogsContainer";

const Mass = (props) => {
    return (
        <div className={classesMasseges.masseges}>
            <DialogsContainer/>
            <MessagesContainer/>
        </div>
    );
};
export default Mass;