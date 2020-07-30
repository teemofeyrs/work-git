import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import LoginForm from "./LoginForm";
import LoginResourses from "./LoginResourses";

import LoginFormRedux from "./LoginForm";

class LoginFormContainer extends Component {
    static propTypes = {

    };

    static defaultProps = {

    };
    onSubmitForm(formData) {
        console.log(formData)
    }
    render() {

        return (
            <Fragment>
                <h3>Sign In</h3>
                <LoginFormRedux onSubmit={ this.onSubmitForm}/>
                <LoginResourses/>
            </Fragment>
            );
    }
}

export default LoginFormContainer;