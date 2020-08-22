import React from 'react'
import classesUsers from './Users.module.css'
import User from './User'

const Users = ({users, follow, unFollow}) => {

    let usersAll = users.map((u)=> (<User user={u}
                                                follow={follow}
                                                unFollow={unFollow}/>));
    return (
        <div className={classesUsers.users}>
            {usersAll}
        </div>
        );
    };

export default Users;