import React from 'react';
import classesDialogs from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classesDialogs.dialogs}>
                <div className={classesDialogs.title}>
                    <h3>Messages</h3>
                </div>
                <div className={classesDialogs.list}>
                    <ul>
                        <li className={classesDialogs.active}>

                                <div className={classesDialogs.userFoto}>
                                    <img src='https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg' alt=""/>
                                </div>
                                <div className={classesDialogs.userName}>
                                    <h3>John Doe</h3>
                                </div>

                        </li>
                        <li>

                                <div className={classesDialogs.userFoto}>
                                    <img src="https://cxl.com/wp-content/uploads/2016/03/nate_munger.png" alt=""/>
                                </div>
                                <div className={classesDialogs.userName}>
                                    <h3>Dimich</h3>
                                </div>

                        </li>
                        <li>

                                <div className={classesDialogs.userFoto}>
                                    <img src="https://s3.amazonaws.com/37assets/svn/1024-original.1e9af38097008ef9573f03b03ef6f363219532f9.jpg" alt=""/>
                                </div>
                                <div className={classesDialogs.userName}>
                                    <h3>Yura</h3>
                                </div>

                        </li>
                        <li>

                                <div className={classesDialogs.userFoto}>
                                    <img src="https://dcavozvb40vtt.cloudfront.net/api/file/0ubAiutLQU2XjZSGvd37" alt=""/>
                                </div>
                                <div className={classesDialogs.userName}>
                                    <h3>Misha</h3>
                                </div>

                        </li>
                        <li>

                                <div className={classesDialogs.userFoto}>
                                    <img src="https://fedspendingtransparency.github.io/assets/img/user_personas/journalist_mug.jpg" alt=""/>
                                </div>
                                <div className={classesDialogs.userName}>
                                    <h3>Alina</h3>
                                </div>

                        </li>
                    </ul>
                </div>
        </div>
    );
};

export default Dialogs;