import React, {Component} from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.main}>
            <div className={classes.description}>
                <h2>About Me</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem consectetur cum doloremque
                    eaque eos error et excepturi fugit inventore iusto nemo officia perferendis, perspiciatis porro
                    quae
                    quisquam recusandae temporibus unde vitae voluptates voluptatibus voluptatum!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam consectetur cum dicta
                    dolore ea
                    esse fuga illum magni nihil, nobis quae quo reprehenderit saepe, sit tempora, unde velit
                    voluptatibus!</p>
                <a href='https://drive.google.com/file/d/1XOd8TePUSKPg9bC8UGVNP3AUKCK-_l--/view?usp=sharing'
                   target="_blank" download="ShmatchenkoArtem">Download CV</a>
            </div>
            <div className={classes.ava}>
            </div>
            <div className={classes.information}>
                <div>
                    <h3>Location</h3>
                    <p>Ukraine, Zaporizhia</p>
                </div>
                <div>
                    <h3>Phone</h3>
                    <p>+380952572842</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>teemofeyrs@gmail.com</p>
                </div>
            </div>
        </div>
    )
};
export default About;