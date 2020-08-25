import React from 'react';
import classesDialogs from './Dialogs.module.css';

const Dialog = (props) => {
    return (
        <div className={classesDialogs.item}>
            <div className={classesDialogs.userImg}>
                <img src={props.img} alt=""/>
            </div>
            <div className={classesDialogs.userName}>
                <h3>{props.name}</h3>
            </div>
        </div>
    );
};

const Dialogs = (props) => {
    let dialogsElem =  props.dialogs.map( data => <Dialog img={data.img} name={data.name}/>)
    return (
        <div className={classesDialogs.dialogs}>
                <div className={classesDialogs.title}>
                    <h3>Messages</h3>
                </div>
                <div className={classesDialogs.list}>
                   {dialogsElem}
                </div>
        </div>
    );
};

export default Dialogs;