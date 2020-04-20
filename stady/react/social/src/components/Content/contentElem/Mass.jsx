import React from 'react';
import classesMasseges from './Masseges.module.css';
import Dialogs from "../Parts/Dialogs";
import Masseges from "../Parts/Masseges";

const Mass = (props) => {
    return(
        <div className={classesMasseges.masseges}>
            <Dialogs dialogs={props.dialogs}/>
            <Masseges messagesData={props.messagesData}
                      newMessageText={props.newMessageText}
                      dispach={props.dispach}/>
        </div>
    );
};
export default Mass;