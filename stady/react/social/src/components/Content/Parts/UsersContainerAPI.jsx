import React from "react";
import {connect} from "react-redux";
import {
    followUserAC,
    hireUserAC, isFetchingAC,
    setCurrentUserPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowUserAC
} from "../../../redux/usersReducers";
import * as axios from "axios";
import User from "./User";
import classesUsers from "./Users.module.css";
import classesUser from "./User.module.css";


class UsersClass extends React.Component {
    constructor(props) {
        super(props);
        this.totalUsersCount = props.totalUsersCount;
        this.pageSize = props.pageSize;
        this.currentPage = props.currentPage;
        this.isFetching = props.isFetching;
    }
    componentDidMount() {
        /*this.props.isFetchingChange(true);*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.pageSize}&page=${this.currentUserPage}`)
            .then( response => {
                /*this.props.isFetchingChange(false);*/
                this.props.setUsersTotalCount(response.data.totalCount)
                this.props.setUsers(response.data.items);
            })
    }
    onPageChanged = (page) => {
        /*this.props.isFetchingChange(true);*/
        this.props.setCurrentUserPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.pageSize}&page=${page}`)
            .then( response => {
               /* this.props.isFetchingChange(false);*/
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        let users = this.props.users.map((u) => (<User user={u}
                                                       follow={this.props.follow}
                                                       unFollow={this.props.unFollow}/>));
        let pageCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++){
            pages.push(i);
        }
        return (
            <div>
                {/*<div>
                    {  (this.isFetching)&&<Preloader/> }
               </div>*/}
                <div className={classesUser.pagination}>
                    {
                        pages.map( p => (<span className={(this.currentPage === p) && (classesUser.currentUserPage)}
                        onClick={() => {this.onPageChanged(p)}}>{p}</span> ))
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
        currentUserPage: state.usersPage.currentUserPage,
        isFetching: state.usersPage.isFetching,

    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followUserAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowUserAC(userID))
        },
        hire: (userID) => {
            dispatch(hireUserAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
        setCurrentUserPage: (currentPage) => {
            dispatch(setCurrentUserPageAC(currentPage))
        },
        isFetchingChange: (fetching) => {
            dispatch(isFetchingAC(fetching))
        }
    };
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;