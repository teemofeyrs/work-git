import React, {Component} from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {compose} from "redux";
import {AuthRedirect} from "../../../../HOC/authRedirect";
import {profileStatusInit} from "../../../../redux/reducers/userProfileReducers/userProfileReducers";
import {gerStatus, getMyId, getProfileStatus} from "../../../../redux/selectors/selectors";


class ProfileInfoContainer extends Component{
componentDidMount() {
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
        myStaus: getProfileStatus(state)
    }
}
export default compose(
    connect(mapDispatchToProps, {profileStatusInit }),
    AuthRedirect
)(ProfileInfoContainer);