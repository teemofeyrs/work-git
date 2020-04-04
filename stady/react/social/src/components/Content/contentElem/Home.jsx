import React from 'react';
import classesHome from './Home.module.css';
import ProfileInfo from "../Parts/ProfileInfo";
import Posts from "../Parts/Posts";

const Home = () => {
    return(
        <div className={classesHome.home}>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
};
export default Home;