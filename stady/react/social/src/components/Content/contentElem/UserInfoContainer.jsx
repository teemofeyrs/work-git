import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {SetUser} from "../../../redux/userProfileReducers";
import Preloader from "../Parts/Preloader/Preloader";
import {withRouter} from "react-router-dom";

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
                <img src={this.props.userInfo.photos.large} alt={this.props.userInfo.fullName}/>
                <div>{this.props.userInfo.aboutMe}</div>
                <div>{this.props.userInfo.lookingForAJobDescription}</div>
                <div>{this.props.userInfo.fullName}</div>
            </div>
        )
    }
}
    let mapStateToProps = (state) => {
        return {
            userInfo: state.user.userInfo
        }
    }
    const UserUrlContainer = withRouter(UserInfoContainerWhithUrl)
    export const UserInfoContainer = connect(mapStateToProps, {SetUser})(UserUrlContainer);