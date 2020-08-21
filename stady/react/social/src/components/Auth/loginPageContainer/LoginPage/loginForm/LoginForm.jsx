import React from "react";
import Input from "../../../../reusable components/input/Input";
import Button from "../../../../reusable components/button/Button";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../../tools/validators/validate";
import {Checkbox} from "../../../../reusable components/checkbox/Checkbox";
import './LoginFormContainer.css';

const LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            {props.error && <div className='commonError'><span>{props.error}</span></div>}
            <Field id='email'
                   name="email"
                   type="email"
                   component={Input}
                   validate={[required]}
            />
            <Field
                id='password'
                name="password"
                type="password"
                component={Input}
                validate={[required]}
            />
            <Field id='rememberMe'
                   name="rememberMe"
                   label='Remember me'
                   component={Checkbox}
                   type="checkbox"
                   value="rememberMe"/>
            <Button active>Sing In</Button>
        </form>
    );
};
const LoginFormRedux = reduxForm({
    form: 'sign in form'
})(LoginForm);

export default LoginFormRedux;