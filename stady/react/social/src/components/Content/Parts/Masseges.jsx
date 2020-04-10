import React from 'react';
import classesMasseges from './Masseges.module.css';

const MassegeMy = (props) => {
    return (
        <div className={classesMasseges.myself}>
            <img src={props.img} alt="my"/>
            <p>{props.message}</p>
        </div>
    );
};
const MassegeOpon = (props) => {
    return (
        <div className={classesMasseges.interlocutor}>
            <p>{props.message}</p>
            <img src={props.img} alt="opon"/>
        </div>
    );
};

const Masseges = (props) => {

 let messages = props.messagesData.map(data => ((data.id === 1) ? <MassegeMy img={data.img} message={data.massage}/> :
        <MassegeOpon img={data.img} message={data.massage}/> ));

    return (
        <div className={classesMasseges.masseges}>
            <div className={classesMasseges.field}>
                {messages}
            </div>
            <div className={classesMasseges.sendArea}>
                <form>
                    <div className={classesMasseges.form}>
                        <input type="text" name="message" placeholder="Type a message here"/>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Masseges;