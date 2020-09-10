import React from 'react'
import classesAddPost from './AddPost.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLength100 } from '../../../../tools/validators/validate'
import Textarea from '../../../reusable components/textarea/Textarea'

let AddPost = (props) => {

    return (
        <div className={classesAddPost.addPost}>
            <form onSubmit={props.handleSubmit}>
                <Field name='addNewPost' type='textarea'
                       validate={[maxLength100]}
                       component={addPostArea} placeholder={'add your post'}
                />
                <button>Add post</button>
            </form>
        </div>
    );
};
const addPostArea = ({input, meta: { touched, error } , ...attr}) => {
    return( <Textarea input={input} touched={touched} error={error} {...attr} id='adPost'/> )
}

export default AddPost = reduxForm({ form: 'addNewPost'})(AddPost);