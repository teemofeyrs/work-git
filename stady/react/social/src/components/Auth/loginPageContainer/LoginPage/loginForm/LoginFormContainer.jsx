import React, { Fragment} from 'react';
import LoginResourses from "./LoginResourses";
import LoginFormRedux from "./LoginForm";
import {login} from "../../../../../redux/reducers/authorizationReducers";
import {connect} from "react-redux";
import {getCaptchaSelec} from "../../../../../redux/selectors/selectors";

const LoginFormContainer = ({login, captcha}) => {

     let onSubmitForm = ({email, password, rememberMe, captcha}) => {
         debugger
        login(email, password, rememberMe, captcha);
    }

        return (
            <Fragment>
                <h3 className='loginForm'>Sign In</h3>
                <LoginFormRedux captcha={captcha} onSubmit={onSubmitForm}/>
                {/*<LoginResourses/>*/}
            </Fragment>
        );
}
const mapStateToProps = (state) => {
    return {
        captcha: getCaptchaSelec(state),
    }
}
export default connect(mapStateToProps, {login})(LoginFormContainer);