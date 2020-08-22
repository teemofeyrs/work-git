import React, { Component } from 'react'
import ProfileInfo from './ProfileInfo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthRedirect } from '../../../../HOC/authRedirect'
import {
    changeStatusOnApi,
    profileStatusInit
} from '../../../../redux/reducers/userProfileReducers/userProfileReducers'
import {getMyId, getMyInfo, getProfileStatus} from '../../../../redux/selectors/selectors'
import {updatePhoto} from "../../../../redux/reducers/myProfileReducers";
import Preloader from "../../Parts/Preloader/Preloader";

class ProfileInfoContainer extends Component{
componentDidMount() {
 this.props.profileStatusInit(this.props.myId);
}
componentDidUpdate(prevProps, prevState) {

}

    render() {
        if(!this.props.myInfo.userId) {
            return <Preloader/>
        }
        return (
            <ProfileInfo {...this.props}/>
        );
    }
}
let mapDispatchToProps = (state) => {
    return {
        myInfo: getMyInfo(state),
        myId: getMyId(state),
        myStatus: getProfileStatus(state)
    }
}
export default compose(
    connect(mapDispatchToProps, {profileStatusInit,changeStatusOnApi, updatePhoto}),
    AuthRedirect
)(ProfileInfoContainer);