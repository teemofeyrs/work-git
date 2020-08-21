import React, { Component } from 'react'
import ProfileInfo from './ProfileInfo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthRedirect } from '../../../../HOC/authRedirect'
import {
    changeStatusOnApi,
    profileStatusInit
} from '../../../../redux/reducers/userProfileReducers/userProfileReducers'
import { getMyId, getProfileStatus } from '../../../../redux/selectors/selectors'

class ProfileInfoContainer extends Component{
componentDidMount() {
    debugger
 this.props.profileStatusInit(this.props.myId);
}

    render() {
        return (
            <ProfileInfo {...this.props}/>
        );
    }
}
let mapDispatchToProps = (state) => {
    return {
        myInfo: { ...state.myInfo},
        myId: getMyId(state),
        myStatus: getProfileStatus(state)
    }
}
export default compose(
    connect(mapDispatchToProps, {profileStatusInit,changeStatusOnApi }),
    AuthRedirect
)(ProfileInfoContainer);