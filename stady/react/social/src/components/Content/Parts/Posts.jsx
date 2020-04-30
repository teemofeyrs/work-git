import React from "react";
import Post from "./Post";
import AddPostsContainer from "./AddPostsContainer";

const Posts = (props) => {
    let postEl = props.state.profilePage.posts.map(data => <Post posts={data}/>);
    return (
        <div>
            <AddPostsContainer store={props.store}/>
            {postEl}
        </div>
    );
};
export default Posts;