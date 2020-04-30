import React from 'react';
import classesHome from './Home.module.css';
import ProfileInfo from "../Parts/ProfileInfo";
import Posts from "../Parts/Posts";

const Home = (props) => {
    return(
        <div className={classesHome.home}>
            <ProfileInfo/>
            <Posts state={props.state}/>
        </div>
    );
};
export default Home;