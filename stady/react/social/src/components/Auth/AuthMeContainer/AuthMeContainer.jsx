import React from 'react'
import { auth } from '../../../redux/reducers/authorizationReducers'
import { connect } from 'react-redux'
import LoginPage from '../loginPageContainer/LoginPage/LoginPage'
import { Redirect } from 'react-router-dom'
import { getIsAuth } from '../../../redux/selectors/selectors'

class AuthMeContainer extends React.Component {
  componentDidMount () {
    this.props.auth();
  }
 componentDidUpdate (prevProps, prevState, snapshot) {

 }

  render () {
    if(this.props.isAuth) {
      return <Redirect to='/'/>
    }
    return <LoginPage/>
    }
}

let mapStateToProps = (state) => {
  return {
    isAuth: getIsAuth(state),
  }
}
export default connect(mapStateToProps, {auth})(AuthMeContainer);