import React from "react";
import Input from "../../../../reusable components/input/Input";
import Button from "../../../../reusable components/button/Button";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field name="email"
                   component={"input"}
                   type="email"
                   placeholder="Email"/>
            <Field name="password"
                   component={"input"}
                   type="password"
                   placeholder="password"/>
            <Input name='email' id='email'/>
            <Input name='password' id='email'/>
            <Input name='radio' id='checkbox' label='Remember me'/>
            <Button active>Sing In</Button>
        </form>
    );
};
const LoginFormRedux = reduxForm({
    form: 'sign in form'
})(LoginForm);

export default LoginFormRedux;