import React from "react";
import Post from "./Post";
import AddPostsContainer from "./AddPostsContainer";

const Posts = (props) => {
    let postEl = props.posts.map(data => <Post key={data.name} posts={data}/>);
    let AddNewPost = (formData) => {
       console.log(formData)
    }
    return (
        <div>
            <AddPostsContainer/>
            {postEl}
        </div>
    );
};
export default Posts;