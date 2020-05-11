import React from "react";
import classesUsers from './Users.module.css';
import User from "./User";
import * as axios from "axios";

const Users = (props) => {
   if(props.users.length === 0){
       axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
       props.setUsers(response.data.items);
   })
   }
    let users = props.users.map((u)=> (<User user={u}
                                                follow={props.follow}
                                                unFollow={props.unFollow}/>));
    return (
        <div className={classesUsers.users}>
            {users}
        </div>
        );
    };

export default Users;