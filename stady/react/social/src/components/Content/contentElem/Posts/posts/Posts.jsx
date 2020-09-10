import React from "react";
import Post from "./Post";
import AddPostsContainer from "../AddPostsContainer";

const Posts = ({myInfo, posts}) => {
    let postEl = posts.map(data => <Post key={data.id} myInfo={myInfo} posts={data}/>);

    return (
        <div>
            <AddPostsContainer/>
            {postEl}
        </div>
    );
};
export default Posts;