import React, {Fragment} from "react";
import TabBar from "../../reusable components/tabBar/TabBar";
import TabBarItem from "../../reusable components/tabBar/TabBarItem";
import LoginFormContainer from "./LoginPage/loginForm/LoginFormContainer";
import SignUpForm from "./LoginPage/logOutForm/SignUpForm";

const Login = ({captcha}) => {
    return (
        <Fragment>
            <TabBar>
                <TabBarItem label="Sign in">
                    <LoginFormContainer captcha={captcha}/>
                </TabBarItem>
                <TabBarItem label="Sign up">
                    <SignUpForm/>
                </TabBarItem>
            </TabBar>
        </Fragment>
    )
};

export default Login;

