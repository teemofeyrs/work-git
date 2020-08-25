import React from "react";
import AddPost from "./AddPost";
import {AddPostCreator, OnPostChangeCreator} from "../../../../redux/reducers/profileReducers";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (formData) => {
            console.log(formData)
            dispatch(AddPostCreator(formData.addNewPost));
        },
    };
}
const AddPostForm = (props) => {
    return (<AddPost onSubmit={props.addPost}/>)
};

const AddPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
export default AddPostsContainer;