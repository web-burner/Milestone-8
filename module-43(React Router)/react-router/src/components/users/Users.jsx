// import React from 'react';
import {useLoaderData} from 'react-router';
import User from './User';
const Users = () => {
    const users = useLoaderData()
    // console.log(users)
    return (
        <div>
           {users.map(user => <User user={user} key={user.id}></User>)}
        </div>
    );
};

export default Users;