import React from 'react';
import classesHome from './Home.module.css';
import ProfileInfo from "../Parts/ProfileInfo";
import Posts from "../Parts/Posts";

const Home = (props) => {
    return(
        <div className={classesHome.home}>
            <ProfileInfo/>
            <Posts posts={props.posts} dispach={props.dispach}
                   newPostText={props.newPostText}/>
        </div>
    );
};
export default Home;