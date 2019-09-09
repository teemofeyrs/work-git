import React, {Component} from 'react';
import classes from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.sate = {
            videoURL: 'https://media.istockphoto.com/videos/abstract-backgroundblue-color-video-id821135272'
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
                    <h1>Heading</h1>
                    <p>Lorem ipsum...</p>
                    <button id={classes.myBtn}>Pause</button>
                </div>
            </div>
        )
    }
};
export default Main;