import React from 'react';
import {connect} from "react-redux";
import {userInit} from "../../../../redux/reducers/userProfileReducers/userProfileReducers";
import Preloader from "../../Parts/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import UserPersonalPage from "./UserPersonalPage";
import {compose} from "redux";
import {AuthRedirect} from "../../../../HOC/authRedirect";
import {getUserProfileInfo} from "../../../../redux/selectors/selectors";

export class UserInfoContainerWhithUrl extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.userInit(userId);
    }
    render() {
        if (!this.props.userInfo.userId) {
           return <Preloader/>
        }
        return (
            <div>
                <UserPersonalPage userInfo={this.props.userInfo}/>
            </div>
        )
    }
}
    let mapStateToProps = (state) => {
        return {
            userInfo: getUserProfileInfo(state),
        }
    }
export const UserInfoContainer = compose(
        connect(mapStateToProps, {userInit}),
        withRouter,
       AuthRedirect
    )(UserInfoContainerWhithUrl);
