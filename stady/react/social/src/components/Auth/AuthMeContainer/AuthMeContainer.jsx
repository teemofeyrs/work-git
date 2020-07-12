import React from 'react';
import * as axios from "axios";
import { setAuthorization } from '../../../redux/reducers/authorizationRedusers';
import { connect } from 'react-redux'

class AuthMeContainer extends React.Component {
  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then( response => {
        console.log(response);
        if (response.data.resultCode === 0){
          this.props.setAuthorization(response.data.data);
        }

      })
  }

  render () {
    return (
      <div>{this.props.auth.id}</div>
    )
  }
}
let mapStateToProps = ({auth}) => {
  return {
    auth: auth
  }
}
export default connect(mapStateToProps, {setAuthorization})(AuthMeContainer);