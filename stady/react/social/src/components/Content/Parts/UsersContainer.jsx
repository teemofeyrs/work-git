
import {connect} from "react-redux";
import {followUserAC, hireUserAC, setUsersAC, unFollowUserAC} from "../../../redux/reducers/usersReducers";
import Users from "./Users";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
    };
}
let mapDispatchToProps = (dispatch) => {
    return{
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
        }
    };
}
const  UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;