import React, { Fragment} from 'react';
import LoginResourses from "./LoginResourses";
import LoginFormRedux from "./LoginForm";
import {login} from "../../../../../redux/reducers/authorizationReducers";
import {connect} from "react-redux";

const LoginFormContainer = ({login}) => {

     let onSubmitForm = ({email, password, rememberMe}) => {
        console.log(email, password, rememberMe);
        login(email, password, rememberMe);
    }

        return (
            <Fragment>
                <h3 className='loginForm'>Sign In</h3>
                <LoginFormRedux onSubmit={onSubmitForm}/>
                <LoginResourses/>
            </Fragment>
        );
}

export default connect(null, {login})(LoginFormContainer);