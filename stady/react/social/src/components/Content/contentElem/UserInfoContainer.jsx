import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {SetUser} from "../../../redux/userProfileReducers";
import Preloader from "../Parts/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import UserPersonalPage from "./UserPersonalPage/UserPersonalPage";
import {compose} from "redux";

export class UserInfoContainerWhithUrl extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.SetUser(response.data);
            })
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
    let mapStateToProps = ({user}) => {
        return {
            userInfo: user.userInfo
        }
    }
export const UserInfoContainer = compose(
        connect(mapStateToProps, {SetUser}),
        withRouter
    )(UserInfoContainerWhithUrl);
