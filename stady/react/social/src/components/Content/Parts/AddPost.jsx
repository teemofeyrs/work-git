import React from "react";
import classesAddPost from './AddPost.module.css';

const AddPost = (props) => {
    let textField = React.createRef();
    let onAddPost = () => {
       props.addPost();
    };
    let onChangeText = () => {
        let text = textField.current.value;
        props.onChange(text);
    };
    return (
        <div className={classesAddPost.addPost}>
            <textarea onChange={onChangeText} ref={textField} value={props.newPostText}> </textarea>
            <button  onClick={onAddPost}>Add post</button>
        </div>
    );
};
export default AddPost;