import React from "react";
import classesAddPost from './AddPost.module.css';
const AddPost = () => {
    return (
        <div className={classesAddPost.addPost}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
    );
};
export default AddPost;