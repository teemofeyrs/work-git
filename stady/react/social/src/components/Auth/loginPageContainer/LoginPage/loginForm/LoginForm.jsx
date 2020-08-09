import React from "react";
import Input from "../../../../reusable components/input/Input";
import Button from "../../../../reusable components/button/Button";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../../tools/validators/validate";
import {Checkbox} from "../../../../reusable components/checkbox/Checkbox";
import {connect} from "react-redux";
import {login} from "../../../../../redux/reducers/authorizationRedusers";

const LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="email"
                type="email"
                component={Input}
                validate={[required]}
            />
            <Field
                name="password"
                type="password"
                component={Input}
                validate={[required]}
            />
            <Field name="rememberMe" label='Remember me' component={Checkbox} type="checkbox" id='rememberMe' value="rememberMe" />
            {/*<Input name='email' id='mail'/>*/}
            {/*<Input name='password' id='pass'/>*/}
            {/* <Input name='radio' id='checkbox' label='Remember me'/>*/}
            <div className='commonError'><span>{props._error}</span></div>
            <Button active>Sing In</Button>
        </form>
    );
};
const LoginFormRedux = reduxForm({
    form: 'sign in form'
})(LoginForm);

export default LoginFormRedux;