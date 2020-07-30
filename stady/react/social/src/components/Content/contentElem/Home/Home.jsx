import React from 'react';
import classesHome from './Home.module.css';
import ProfileInfo from "../../Parts/ProfileInfo";
import PostsContainer from "../../Parts/PostsContainer";

const Home = (props) => {
    return(
        <div className={classesHome.home}>
            <ProfileInfo/>
            <PostsContainer />
        </div>
    );
};
export default Home;