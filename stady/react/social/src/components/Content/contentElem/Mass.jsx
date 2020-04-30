import React from 'react';
import classesMasseges from './Masseges.module.css';
import Dialogs from "../Parts/Dialogs";
import Masseges from "../Parts/Masseges";
import MessagesContainer from "../Parts/MassegesContainer";

const Mass = (props) => {
    debugger;
    return(
        <div className={classesMasseges.masseges}>
            <Dialogs dialogs={props.state.messagePage.dialogs}/>
           <MessagesContainer />
        </div>
    );
};
export default Mass;