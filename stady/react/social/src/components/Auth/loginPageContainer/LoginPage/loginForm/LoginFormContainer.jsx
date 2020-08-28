import React, { Fragment } from 'react'
import LoginFormRedux from './LoginForm'
import { login } from '../../../../../redux/reducers/authorizationReducers'
import { connect } from 'react-redux'
import { getCaptchaSelec } from '../../../../../redux/selectors/selectors'

const LoginFormContainer = ({login, captchaUrl}) => {

     let onSubmitForm = ({email, password, rememberMe, captcha}) => {
        /*login(email, password, rememberMe, captcha);*/
       console.log(email, password, rememberMe, captcha);
       login(email, password, rememberMe, captcha);
    }

        return (
            <Fragment>
                <h3 className='loginForm'>Sign In</h3>
                <LoginFormRedux captchaUrl={captchaUrl} onSubmit={onSubmitForm}/>
                {/*<LoginResourses/>*/}
            </Fragment>
        );
}
const mapStateToProps = (state) => {
    return {
      captchaUrl: getCaptchaSelec(state),
    }
}
export default connect(mapStateToProps, {login})(LoginFormContainer);