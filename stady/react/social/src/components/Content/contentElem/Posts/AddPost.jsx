import React, {Fragment} from "react";
import classesAddPost from './AddPost.module.css';
import {Field, reduxForm} from "redux-form";
import Input from "../../../reusable components/input/Input";
import {maxLength100, required} from '../../../../tools/validators/validate';
import Textarea from "../../../reusable components/textarea/Textarea";
let AddPost = (props) => {

    return (
        <div className={classesAddPost.addPost}>
            <form onSubmit={props.handleSubmit}>
                <Field name='addNewPost' type='textarea'
                       validate={[required, maxLength100]}
                       component={addPostArea} placeholder={'add your post'}
                />
                <button>Add post</button>
            </form>
        </div>
    );
};
const addPostArea = ({input, meta , ...attr}) => {
    return( <Textarea {...input} {...meta} {...attr} id='adPost'/> )
}

export default AddPost = reduxForm({ form: 'addNewPost'})(AddPost);