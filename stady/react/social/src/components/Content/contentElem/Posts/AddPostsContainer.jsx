import React from 'react'
import AddPost from './AddPost'
import { connect } from 'react-redux'
import { getNewPostText } from '../../../../redux/selectors/selectors'
import { AddPostAC } from '../../../../redux/reducers/profileReducers'

class AddPostForm extends React.Component {

    addPost = ({addNewPost}) => {
        debugger
        this.props.AddPostAC(addNewPost);
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
const AddPostsContainer = connect(mapStateToProps, {AddPostAC})(AddPostForm);
export default AddPostsContainer;