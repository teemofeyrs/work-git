import React from "react";
import AddPost from "./AddPost";
import {AddPostCreator, OnPostChangeCreator} from "../../../redux/profileReducers";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () =>{
            dispatch(AddPostCreator());
        } ,
        onChange: (text) => {
            dispatch(OnPostChangeCreator(text));
        }
    };
}
const AddPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);
export default AddPostsContainer;