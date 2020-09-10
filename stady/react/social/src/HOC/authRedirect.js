import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapSateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export const AuthRedirect = (Component) => {
    class WithRedirection extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login'/>

            return <Component {...this.props}/>
        }
    }

    return connect(mapSateToProps,{})(WithRedirection);
}