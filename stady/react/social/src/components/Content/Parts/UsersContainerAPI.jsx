import React from "react";
import {connect} from "react-redux";
import { follow,hireUser,
    setCurrentUserPage,unFollow,
    followingProgress, getUsers } from "../../../redux/usersReducers";
import User from "./User";
import classesUsers from "./Users.module.css";
import classesUser from "./User.module.css";
import Preloader from "./Preloader/Preloader";
import {AuthRedirect} from "../../../HOC/authRedirect";
import {compose} from "redux";

class UsersClass extends React.Component {
    constructor(props) {
        super(props);
        this.totalUsersCount = props.totalUsersCount;
        this.pageSize = props.pageSize;
        this.currentPage = props.currentPage;
        this.isFetching = props.isFetching;
    }
    componentDidMount() {
        this.props.getUsers(this.pageSize, this.currentPage)
    }

    onPageChanged = (page) => {
        this.props.setCurrentUserPage(page);
        this.props.getUsers(this.pageSize, page)
    }

    render() {
        let users = this.props.users.map((u) => (<User user={u}
                                                       followingInProgress={this.props.followingInProgress}
                                                       follow={this.props.follow}
                                                       unFollow={this.props.unFollow}
                                                       followingProgress={this.props.followingProgress}/>));
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {((this.props.isFetching) ? <Preloader/> : undefined)}
                </div>
                <div className={classesUser.pagination}>
                    {
                        pages.map(p => (<span className={this.props.currentPage === p && classesUser.currentUserPage}
                                              onClick={() => {
                                                  this.onPageChanged(p)
                                              }}>{p}</span>))
                    }
                </div>
                <div className={classesUsers.users}>
                    {users}
                </div>
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
}
const UsersContainer = compose(
    connect(mapStateToProps, {
        follow, unFollow,hireUser,
        setCurrentUserPage,followingProgress,getUsers}),
    AuthRedirect)(UsersClass);

export default UsersContainer;
