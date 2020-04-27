import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import {AddPostCreator, OnPostChangeCreator} from "../../../redux/profileReduser";

const AddPostsContainer = (props) => {
    debugger;
    let newPostText = props.store.getState().profilePage.newPostText;
    let addPost = () => {
        props.store.dispatch(AddPostCreator());
    };
    let onChange = (text) => {
        props.store.dispatch(OnPostChangeCreator(text));
    };
    return (
        <AddPost addPost={addPost} onChange={onChange}
               newPostText={newPostText}/>
    );
};

export default AddPostsContainer;