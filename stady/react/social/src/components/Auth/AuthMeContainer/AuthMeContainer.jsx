import React from 'react';
import {auth} from '../../../redux/reducers/authorizationRedusers';
import {connect} from 'react-redux'
import LoginPage from "../loginPageContainer/LoginPage/LoginPage";
import {Redirect} from "react-router-dom";

class AuthMeContainer extends React.Component {
  componentDidMount () {
    this.props.auth();
  }

  render () {
    if(this.props.isAuth) return <Redirect to='/'/>

    return <LoginPage/>
    }


}

let mapStateToProps = ({auth}) => {
  return {
    isAuth: auth.isAuth
  }
}
export default connect(mapStateToProps, {auth})(AuthMeContainer);