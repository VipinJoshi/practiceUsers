import React from "react";
import Card from '../UI/Card'
import classes from './UsersList.module.css';

const UsersList = ({ users }) => {

    return (
        <Card classes={classes.users}>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.userName} ({user.age}) years old</li>
                })}
            </ul>
        </Card>)
}

export default UsersList;