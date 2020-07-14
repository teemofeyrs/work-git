import React from "react";
import {connect} from "react-redux";
import LoginPage from "./LoginPage/LoginPage";

class LoginPageContainer extends React.Component {

    render() {
        return(<LoginPage/>)
    }
}

export default connect()(LoginPageContainer);