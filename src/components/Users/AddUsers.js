import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUsers.module.css';

const AddUsers = (props) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState(0);

    const handleOnSubmit = event => {
        event.preventDefault();
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    return <Card classes={classes.input}>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="userName">
                User Name
            </label>
            <input id="username" type="text" value={userName} onChange={handleUserNameChange} />
            <label htmlFor="age">
                Age
            </label>
            <input id="age" type="number" value={age} onChange={handleAgeChange} />
            <Button type="submit" > Add User</Button>
        </form>
    </Card>
};

export default AddUsers;