import React from 'react';
import classesMasseges from './Masseges.module.css';
import Dialogs from "../Parts/Dialogs";
import Masseges from "../Parts/Masseges";
import MessagesContainer from "../Parts/MassegesContainer";

const Mass = (props) => {
    return(
        <div className={classesMasseges.masseges}>
            <Dialogs dialogs={props.store.getState().messagePage.dialogs}/>
           <MessagesContainer store={props.store}/>
        </div>
    );
};
export default Mass;