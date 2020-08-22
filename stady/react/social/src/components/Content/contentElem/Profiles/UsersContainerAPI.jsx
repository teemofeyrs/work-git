import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  followingProgress,
  getUsers,
  hireUser,
  setCurrentUserPage,
  unFollow
} from '../../../../redux/reducers/usersReducers'
import User from './User'
import classesUsers from './Users.module.css'
import Preloader from '../../Parts/Preloader/Preloader'
import { AuthRedirect } from '../../../../HOC/authRedirect'
import { compose } from 'redux'
import Pagination from './pagination/Pagination'

class UsersClass extends React.Component {
  constructor (props) {
    super(props)
    this.totalUsersCount = props.totalUsersCount
    this.pageSize = props.pageSize
    this.currentPage = props.currentPage
    this.isFetching = props.isFetching
  }

  componentDidMount () {
    this.props.getUsers(this.pageSize, this.currentPage)
  }

  onPageChanged = (page) => {
    this.props.setCurrentUserPage(page)
    this.props.getUsers(this.pageSize, page)
  }

  render () {
    let users = this.props.users.map((u) => (<User user={u}
                                                   followingInProgress={this.props.followingInProgress}
                                                   follow={this.props.follow}
                                                   unFollow={this.props.unFollow}
                                                   followingProgress={this.props.followingProgress}/>))

    return (
      <div>
        <div>
          {((this.props.isFetching) ? <Preloader/> : undefined)}
        </div>
        <Pagination totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}/>
        <div className={classesUsers.users}>
          {users}
        </div>
      </div>

    )
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
  }
}
const UsersContainer = compose(
  connect(mapStateToProps, {
    follow, unFollow, hireUser,
    setCurrentUserPage, followingProgress, getUsers
  }),
  AuthRedirect)(UsersClass)

export default UsersContainer
