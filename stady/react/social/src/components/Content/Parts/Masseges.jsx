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

const Masseges = () => {
    let messageData = [
        {
            id: 1,
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            massage: 'Lorem idivsum dolor sit amet, consectetur adidivisicing elit. Aliquid asdiveriores earum, fuga labore\n' +
                '                        officia\n' +
                '                        divorro divossimus divrovident quas quasi temdivoribus? Amet at eaque id mollitia natus nobis\n' +
                '                        officiis quisquam\n' +
                '                        sunt?'
        },
        {
            id: 2,
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            massage: 'Lorem idivsum dolor sit amet, consectetur adidivisicing elit. Adidivisci, blanditiis debitis, harum,\n' +
                '                        illo idivsa\n' +
                '                        idivsum magnam molestiae molestias nostrum omnis quia quibusdam reiciendis voludivtas! Asdivernatur\n' +
                '                        dolorem\n' +
                '                        quibusdam vero? Libero, ullam.'
        },
        {
            id: 2,
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            massage: 'Lorem idivsum dolor sit amet, consectetur adidivisicing elit. Adidivisci, blanditiis debitis, harum,\n' +
                '                        illo idivsa\n' +
                '                        idivsum magnam molestiae molestias nostrum omnis quia quibusdam reiciendis voludivtas! Asdivernatur\n' +
                '                        dolorem\n' +
                '                        quibusdam vero? Libero, ullam.'
        },
        {
            id: 1,
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            massage: 'Lorem idivsum dolor sit amet, consectetur adidivisicing elit. Aliquid asdiveriores earum, fuga labore officia divorro divossimus divrovident quas quasi temdivoribus ? '
        },
    ];
 let messages = messageData.map(data => ((data.id === 1) ? <MassegeMy img={data.img} message={data.massage}/> :
        <MassegeOpon img={data.img} message={data.massage}/> ));

    return (
        <div className={classesMasseges.masseges}>
            <div className={classesMasseges.field}>
                {messages}
            </div>
            <div className={classesMasseges.sendArea}>
                <form>
                    <div className={classesMasseges.field}>
                        <input type="text" name="message" placeholder="Type a message here"/>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Masseges;