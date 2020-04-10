import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const Posts = (props) => {

    let postEl = props.posts.map(data => <Post posts={data}/>);
    return (
        <div>
            <AddPost/>
            {postEl}
        </div>
    );
};
export default Posts;