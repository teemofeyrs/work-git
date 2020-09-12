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
    let messages = props.messageData.map(data => ((data.id === 1) ?
        <MassegeMy key={data.massage} img={data.img} message={data.massage}/> :
        <MassegeOpon key={data.massage} img={data.img} message={data.massage}/>));
    const onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.messageChange(text);
    };
    const addMessage = () => {
        props.addMessage();
    };
    return (
        <div className={classesMasseges.masseges}>
          <div className={classesMasseges.sendArea}>
            <div className={classesMasseges.formWrapper}>
              <div className={classesMasseges.form}>
                <input onChange={onMessageChange} type="text" placeholder="Type a message here"
                       value={props.newPostText}/>
                <button type="submit" onClick={addMessage}>Send</button>
              </div>
            </div>
          </div>
          <div className={classesMasseges.field}>
              {messages}
          </div>

        </div>
    );
};

export default Masseges;