import React, {Component} from 'react';
import classes from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.sate = {
            videoURL: 'https://media.istockphoto.com/videos/code-programming-video-id854270548',
        }
    }

    render() {
        return (
            <div className={classes.main}>
                <video id={classes.myVideo} autoPlay muted loop>
                    <source src={this.sate.videoURL} type="video/mp4"/>
                    <p>Your browser doesn't support HTML5 video</p>
                </video>

                <div className={classes.content}>
                    <div>
                        <img src="./../../../img/madeBY.png" alt='logo'/>
                    </div>
                    <h1>
                        I'm<br/>
                        Artem<br/>
                        Shmetchenko<br/>
                    </h1>
                    <p>junior front-end developer</p>
                </div>
            </div>
        )
    }
};
export default Main;