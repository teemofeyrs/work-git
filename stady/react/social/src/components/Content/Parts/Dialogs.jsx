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

const Dialogs = () => {
    let dialogs = [
        {
            id: 1,
            img: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
            name: 'John Doe'
        },
        {
            id: 2,
            img: "https://cxl.com/wp-content/uploads/2016/03/nate_munger.png",
            name: 'Dimych'
        },
        {
            id: 3,
            img: 'https://s3.amazonaws.com/37assets/svn/1024-original.1e9af38097008ef9573f03b03ef6f363219532f9.jpg',
            name: 'Yura'
        },
        {
            id: 4,
            img: 'https://dcavozvb40vtt.cloudfront.net/api/file/0ubAiutLQU2XjZSGvd37',
            name: 'Misha'
        },
        {
            id: 5,
            img: 'https://fedspendingtransparency.github.io/assets/img/user_personas/journalist_mug.jpg',
            name: 'Alina'
        },
        {
            id: 6,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0AIdmvnkOh4_odOdtEMSWJTjU7R41kPjbVOOyOK9euu9ENhKJ&usqp=CAU',
            name: 'Natasha'
        },
        {
            id: 7,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTny0zZ6Fxf3YtRhIi0bNmQ1tmqS8MkQasEi2xmcpAPxqmYdw04&usqp=CAU',
            name: 'Elizabet'
        },
    ];

    let dialogsElem =  dialogs.map( data => <Dialog img={data.img} name={data.name}/>)

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