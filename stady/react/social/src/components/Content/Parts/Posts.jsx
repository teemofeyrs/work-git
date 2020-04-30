import React from "react";
import Post from "./Post";
import AddPostsContainer from "./AddPostsContainer";

const Posts = (props) => {
    let postEl = props.posts.map(data => <Post posts={data}/>);
    return (
        <div>
            <AddPostsContainer/>
            {postEl}
        </div>
    );
};
export default Posts;