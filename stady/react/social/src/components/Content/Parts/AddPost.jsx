import React from "react";
import classesAddPost from './AddPost.module.css';
import {AddPostCreator, OnPostChangeCreator} from "../../../redux/profileReduser";
const AddPost = (props) => {
    let textField = React.createRef();
    let addPost = () => {
       props.dispach(AddPostCreator());
    };
    let onChange = () => {
        let text = textField.current.value;
        props.dispach(OnPostChangeCreator(text));
    };
    return (
        <div className={classesAddPost.addPost}>
            <textarea onChange={onChange} ref={textField} value={props.newPostText}> </textarea>
            <button  onClick={addPost}>Add post</button>
        </div>
    );
};
export default AddPost;