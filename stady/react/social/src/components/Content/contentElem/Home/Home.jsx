import React from 'react';
import classesHome from './Home.module.css';

import PostsContainer from "../Posts/posts/PostsContainer";
import ProfileInfoContainer from "./ProfileInfoContainer";

const Home = (props) => {
    return(
        <div className={classesHome.home}>
            <ProfileInfoContainer/>
            <PostsContainer />
        </div>
    );
};
export default Home;