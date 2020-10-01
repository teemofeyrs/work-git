import React from 'react'
import AddPost from './AddPost'
import { connect } from 'react-redux'
import { getNewPostText } from '../../../../redux/selectors/selectors'
import { AddPostAC } from '../../../../redux/reducers/profileReducers'
import {reset} from 'redux-form';

class AddPostForm extends React.Component {

    addPost = ({addNewPost}) => {
        const { reset } = this.props;
        this.props.AddPostAC(addNewPost);
        reset('addNewPost')
    }
    render() {

        return (<AddPost onSubmit={this.addPost}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        newPostText: getNewPostText(state),
    };
}
const AddPostsContainer = connect(mapStateToProps, {AddPostAC, reset})(AddPostForm);
export default AddPostsContainer;